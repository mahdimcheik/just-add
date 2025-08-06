# CD

## client side (angular)

1.  create docker file

## vps side

1.  Create docker-compose.yml

```yml
services:
  # Angular Frontend Application
  frontend:
    image: mahdimcheik/just-add-front:prod
    container_name: just-add-frontend
    #ports:
    #  - "4200:80"
    expose:
      - "80"
    networks:
      - just-add-network
    environment:
      - NODE_ENV=production
    restart: unless-stopped

volumes:
  node_modules:
networks:
  just-add-network:
    external: true
```

where ` image: mahdimcheik/just-add-front:prod` is the image on dockerhub with the tag prod or other and `container_name: just-add-frontend` is the name used for communication.
Use expose if we use external service and network for communication with other containers otherwise, use port mapping.
<strong>note that , there is an external network used with the other containers</strong>

# reverse proxy (Nginx proxy manager)

1.  create docker compose

```yml
services:
  nginx-proxy-manager:
    image: jc21/nginx-proxy-manager:latest
    container_name: nginx-proxy-manager
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "81:81"
    volumes:
      - ./data/npm/data:/data
      - ./data/npm/letsencrypt:/etc/letsencrypt
    networks:
      - just-add-network

networks:
  just-add-network:
    external: true
```

We use the same network

## setting nginx proxy on web interface

go to `http://185.97.144.63:81/nginx/proxy` it is port 81.
the add new host :
![first, add host](/images-readme/nginx-proxy-1.png)

1.  go to hosts then add new
2.  in details, type the site domaine, then the docker name of front or back, and the port then go to ssl

![second , set ssl ](/images-readme/nginx-2.png)

# API

Create docker compose

## postgres and pagadmin

```yml
services:
  db:
    image: postgres:15
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U $$POSTGRES_USER -d $$POSTGRES_DB"]
      interval: 10s
      timeout: 5s
      retries: 5
    container_name: postgres_db
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    ports:
      - "${POSTGRES_PORT}:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - reseau_interne

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: ${PGADMIN_DEFAULT_EMAIL}
      PGADMIN_DEFAULT_PASSWORD: ${PGADMIN_DEFAULT_PASSWORD}
    ports:
      - "${PGADMIN_PORT}:80"
    depends_on:
      - db
    volumes:
      - pgadmin_data:/var/lib/pgadmin
    networks:
      - reseau_interne
      - just-add-network # Connecté au réseau externe pour y accéder via NPM
```

we pull the images, for the postgres, we need to check if it runs correctly , why? because the api depends on it. and it will start once the health check is passed.

```yml
healthcheck:
  test: ["CMD-SHELL", "pg_isready -U $$POSTGRES_USER -d $$POSTGRES_DB"]
  interval: 10s
  timeout: 5s
  retries: 5
```

for internal connection, i use internal network `reseau_interne`, to communicate the pgadmin and postgres, same for postgres and the api.

## API

create service

```yml
api:
  image: mahdimcheik/just-add-api:prod
  # build:
  #   context: .
  #   dockerfile: Dockerfile
  container_name: just-add-api
  environment:
    ASPNETCORE_URLS: ${ASPNETCORE_URLS}
    HOST_IP: ${HOST_IP}
    DB_USER: ${DB_USER}
    DB_PASSWORD: ${DB_PASSWORD}
    DB_NAME: ${DB_NAME}
    DB_HOST: ${DB_HOST}
    DB_PORT: ${DB_PORT}
    JWT_SECRET: ${JWT_SECRET}
    JWT_ISSUER: ${JWT_ISSUER}
    JWT_AUDIENCE: ${JWT_AUDIENCE}

    JWT_EXPIRATION_MINUTES: ${JWT_EXPIRATION_MINUTES}
    ADMIN_EMAIL: ${ADMIN_EMAIL}
    ADMIN_PASSWORD: ${ADMIN_PASSWORD}
    ADMIN_FIRST_NAME: ${ADMIN_FIRST_NAME}
    ADMIN_LAST_NAME: ${ADMIN_LAST_NAME}
    FRONT_URL: ${FRONT_URL}
    API_URL: ${API_URL}

  #ports:
  #  - "${API_PORT}:7113"
  expose:
    - "7113"
  networks:
    - reseau_interne
    - just-add-network

  depends_on:
    db:
      condition: service_healthy

volumes:
  postgres_data:
  pgadmin_data:

networks:
  reseau_interne:
    driver: bridge
```

as before, 2 networks, one for internal communication with the database, and external one to serve the API.

this service run once the check on the database is done.

```yml
depends_on:
  db:
    condition: service_healthy
```

note that all the environement variables are set in .env file at the same level of the docker-compose.yml

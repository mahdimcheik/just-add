/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { ObjectApiResponse } from '../models/ObjectApiResponse';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class TestService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @returns ObjectApiResponse OK
     * @throws ApiError
     */
    public getApiTestPublic(): Observable<ObjectApiResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/Test/public',
        });
    }
    /**
     * @returns ObjectApiResponse OK
     * @throws ApiError
     */
    public getApiTestProtected(): Observable<ObjectApiResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/Test/protected',
        });
    }
    /**
     * @returns ObjectApiResponse OK
     * @throws ApiError
     */
    public getApiTestAdmin(): Observable<ObjectApiResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/Test/admin',
        });
    }
    /**
     * @param requestBody
     * @returns ObjectApiResponse OK
     * @throws ApiError
     */
    public postApiTestEcho(
        requestBody?: any,
    ): Observable<ObjectApiResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/Test/echo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

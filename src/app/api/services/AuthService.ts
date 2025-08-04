/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { LoginDto } from '../models/LoginDto';
import type { ObjectApiResponse } from '../models/ObjectApiResponse';
import type { RegisterDto } from '../models/RegisterDto';
import type { UserResponseDtoApiResponse } from '../models/UserResponseDtoApiResponse';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param requestBody
     * @returns UserResponseDtoApiResponse OK
     * @throws ApiError
     */
    public postAuthRegister(
        requestBody?: RegisterDto,
    ): Observable<UserResponseDtoApiResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/Auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns UserResponseDtoApiResponse OK
     * @throws ApiError
     */
    public postAuthLogin(
        requestBody?: LoginDto,
    ): Observable<UserResponseDtoApiResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/Auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns ObjectApiResponse OK
     * @throws ApiError
     */
    public getAuthMe(): Observable<ObjectApiResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/Auth/me',
        });
    }
}

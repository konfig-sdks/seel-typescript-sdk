/* tslint:disable */
/* eslint-disable */
/*
Seel API

Seel API

The version of the OpenAPI document: 1.3.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Claim } from '../models';
// @ts-ignore
import { ClaimGetAllClaimsResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ClaimApi - axios parameter creator
 * @export
 */
export const ClaimApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary List claims
         * @param {string} xSeelApiKey Your Seel API key
         * @param {string} xSeelApiVersion Version of the Seel API to use
         * @param {string} partner partner name
         * @param {string} [orderId] Query by order ID
         * @param {number} [page] Query by page, default 0
         * @param {number} [pageSize] Query by page_size, default 100
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllClaims: async (xSeelApiKey: string, xSeelApiVersion: string, partner: string, orderId?: string, page?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xSeelApiKey' is not null or undefined
            assertParamExists('getAllClaims', 'xSeelApiKey', xSeelApiKey)
            // verify required parameter 'xSeelApiVersion' is not null or undefined
            assertParamExists('getAllClaims', 'xSeelApiVersion', xSeelApiVersion)
            // verify required parameter 'partner' is not null or undefined
            assertParamExists('getAllClaims', 'partner', partner)
            const localVarPath = `/{partner}/claims`
                .replace(`{${"partner"}}`, encodeURIComponent(String(partner !== undefined ? partner : `-partner-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (orderId !== undefined) {
                localVarQueryParameter['order_id'] = orderId;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (xSeelApiKey != null) {
                localVarHeaderParameter['X-Seel-API-Key'] = String(xSeelApiKey);
            }

            if (xSeelApiVersion != null) {
                localVarHeaderParameter['X-Seel-API-Version'] = String(xSeelApiVersion);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{partner}/claims',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a claim
         * @param {string} claimId ID of the claim
         * @param {string} xSeelApiKey Your Seel API key
         * @param {string} xSeelApiVersion Version of the Seel API to use
         * @param {string} partner partner name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (claimId: string, xSeelApiKey: string, xSeelApiVersion: string, partner: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'claimId' is not null or undefined
            assertParamExists('getById', 'claimId', claimId)
            // verify required parameter 'xSeelApiKey' is not null or undefined
            assertParamExists('getById', 'xSeelApiKey', xSeelApiKey)
            // verify required parameter 'xSeelApiVersion' is not null or undefined
            assertParamExists('getById', 'xSeelApiVersion', xSeelApiVersion)
            // verify required parameter 'partner' is not null or undefined
            assertParamExists('getById', 'partner', partner)
            const localVarPath = `/{partner}/claims/{claim_id}`
                .replace(`{${"claim_id"}}`, encodeURIComponent(String(claimId !== undefined ? claimId : `-claim_id-`)))
                .replace(`{${"partner"}}`, encodeURIComponent(String(partner !== undefined ? partner : `-partner-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (xSeelApiKey != null) {
                localVarHeaderParameter['X-Seel-API-Key'] = String(xSeelApiKey);
            }

            if (xSeelApiVersion != null) {
                localVarHeaderParameter['X-Seel-API-Version'] = String(xSeelApiVersion);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{partner}/claims/{claim_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ClaimApi - functional programming interface
 * @export
 */
export const ClaimApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClaimApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary List claims
         * @param {ClaimApiGetAllClaimsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllClaims(requestParameters: ClaimApiGetAllClaimsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClaimGetAllClaimsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllClaims(requestParameters.xSeelApiKey, requestParameters.xSeelApiVersion, requestParameters.partner, requestParameters.orderId, requestParameters.page, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a claim
         * @param {ClaimApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: ClaimApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Claim>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.claimId, requestParameters.xSeelApiKey, requestParameters.xSeelApiVersion, requestParameters.partner, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ClaimApi - factory interface
 * @export
 */
export const ClaimApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClaimApiFp(configuration)
    return {
        /**
         * 
         * @summary List claims
         * @param {ClaimApiGetAllClaimsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllClaims(requestParameters: ClaimApiGetAllClaimsRequest, options?: AxiosRequestConfig): AxiosPromise<ClaimGetAllClaimsResponse> {
            return localVarFp.getAllClaims(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a claim
         * @param {ClaimApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: ClaimApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Claim> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAllClaims operation in ClaimApi.
 * @export
 * @interface ClaimApiGetAllClaimsRequest
 */
export type ClaimApiGetAllClaimsRequest = {
    
    /**
    * Your Seel API key
    * @type {string}
    * @memberof ClaimApiGetAllClaims
    */
    readonly xSeelApiKey: string
    
    /**
    * Version of the Seel API to use
    * @type {string}
    * @memberof ClaimApiGetAllClaims
    */
    readonly xSeelApiVersion: string
    
    /**
    * partner name
    * @type {string}
    * @memberof ClaimApiGetAllClaims
    */
    readonly partner: string
    
    /**
    * Query by order ID
    * @type {string}
    * @memberof ClaimApiGetAllClaims
    */
    readonly orderId?: string
    
    /**
    * Query by page, default 0
    * @type {number}
    * @memberof ClaimApiGetAllClaims
    */
    readonly page?: number
    
    /**
    * Query by page_size, default 100
    * @type {number}
    * @memberof ClaimApiGetAllClaims
    */
    readonly pageSize?: number
    
}

/**
 * Request parameters for getById operation in ClaimApi.
 * @export
 * @interface ClaimApiGetByIdRequest
 */
export type ClaimApiGetByIdRequest = {
    
    /**
    * ID of the claim
    * @type {string}
    * @memberof ClaimApiGetById
    */
    readonly claimId: string
    
    /**
    * Your Seel API key
    * @type {string}
    * @memberof ClaimApiGetById
    */
    readonly xSeelApiKey: string
    
    /**
    * Version of the Seel API to use
    * @type {string}
    * @memberof ClaimApiGetById
    */
    readonly xSeelApiVersion: string
    
    /**
    * partner name
    * @type {string}
    * @memberof ClaimApiGetById
    */
    readonly partner: string
    
}

/**
 * ClaimApiGenerated - object-oriented interface
 * @export
 * @class ClaimApiGenerated
 * @extends {BaseAPI}
 */
export class ClaimApiGenerated extends BaseAPI {
    /**
     * 
     * @summary List claims
     * @param {ClaimApiGetAllClaimsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClaimApiGenerated
     */
    public getAllClaims(requestParameters: ClaimApiGetAllClaimsRequest, options?: AxiosRequestConfig) {
        return ClaimApiFp(this.configuration).getAllClaims(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a claim
     * @param {ClaimApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClaimApiGenerated
     */
    public getById(requestParameters: ClaimApiGetByIdRequest, options?: AxiosRequestConfig) {
        return ClaimApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}

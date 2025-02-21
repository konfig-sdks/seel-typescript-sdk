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
import { Invoice } from '../models';
// @ts-ignore
import { InvoiceListInvoicesResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * InvoiceApi - axios parameter creator
 * @export
 */
export const InvoiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get an invoice
         * @param {string} invoiceId ID of the invoice
         * @param {string} xSeelApiKey Your Seel API key
         * @param {string} xSeelApiVersion Version of the Seel API to use
         * @param {string} partner partner name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvoiceById: async (invoiceId: string, xSeelApiKey: string, xSeelApiVersion: string, partner: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'invoiceId' is not null or undefined
            assertParamExists('getInvoiceById', 'invoiceId', invoiceId)
            // verify required parameter 'xSeelApiKey' is not null or undefined
            assertParamExists('getInvoiceById', 'xSeelApiKey', xSeelApiKey)
            // verify required parameter 'xSeelApiVersion' is not null or undefined
            assertParamExists('getInvoiceById', 'xSeelApiVersion', xSeelApiVersion)
            // verify required parameter 'partner' is not null or undefined
            assertParamExists('getInvoiceById', 'partner', partner)
            const localVarPath = `/{partner}/invoices/{invoice_id}`
                .replace(`{${"invoice_id"}}`, encodeURIComponent(String(invoiceId !== undefined ? invoiceId : `-invoice_id-`)))
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
                pathTemplate: '/{partner}/invoices/{invoice_id}',
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
         * @summary List invoices
         * @param {string} xSeelApiKey Your Seel API key
         * @param {string} xSeelApiVersion Version of the Seel API to use
         * @param {string} partner partner name
         * @param {number} [page] Query by page, default 0
         * @param {number} [pageSize] Query by page_size, default 100
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listInvoices: async (xSeelApiKey: string, xSeelApiVersion: string, partner: string, page?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xSeelApiKey' is not null or undefined
            assertParamExists('listInvoices', 'xSeelApiKey', xSeelApiKey)
            // verify required parameter 'xSeelApiVersion' is not null or undefined
            assertParamExists('listInvoices', 'xSeelApiVersion', xSeelApiVersion)
            // verify required parameter 'partner' is not null or undefined
            assertParamExists('listInvoices', 'partner', partner)
            const localVarPath = `/{partner}/invoices`
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
                pathTemplate: '/{partner}/invoices',
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
 * InvoiceApi - functional programming interface
 * @export
 */
export const InvoiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InvoiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get an invoice
         * @param {InvoiceApiGetInvoiceByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInvoiceById(requestParameters: InvoiceApiGetInvoiceByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Invoice>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInvoiceById(requestParameters.invoiceId, requestParameters.xSeelApiKey, requestParameters.xSeelApiVersion, requestParameters.partner, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List invoices
         * @param {InvoiceApiListInvoicesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listInvoices(requestParameters: InvoiceApiListInvoicesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvoiceListInvoicesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listInvoices(requestParameters.xSeelApiKey, requestParameters.xSeelApiVersion, requestParameters.partner, requestParameters.page, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InvoiceApi - factory interface
 * @export
 */
export const InvoiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InvoiceApiFp(configuration)
    return {
        /**
         * 
         * @summary Get an invoice
         * @param {InvoiceApiGetInvoiceByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvoiceById(requestParameters: InvoiceApiGetInvoiceByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Invoice> {
            return localVarFp.getInvoiceById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List invoices
         * @param {InvoiceApiListInvoicesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listInvoices(requestParameters: InvoiceApiListInvoicesRequest, options?: AxiosRequestConfig): AxiosPromise<InvoiceListInvoicesResponse> {
            return localVarFp.listInvoices(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getInvoiceById operation in InvoiceApi.
 * @export
 * @interface InvoiceApiGetInvoiceByIdRequest
 */
export type InvoiceApiGetInvoiceByIdRequest = {
    
    /**
    * ID of the invoice
    * @type {string}
    * @memberof InvoiceApiGetInvoiceById
    */
    readonly invoiceId: string
    
    /**
    * Your Seel API key
    * @type {string}
    * @memberof InvoiceApiGetInvoiceById
    */
    readonly xSeelApiKey: string
    
    /**
    * Version of the Seel API to use
    * @type {string}
    * @memberof InvoiceApiGetInvoiceById
    */
    readonly xSeelApiVersion: string
    
    /**
    * partner name
    * @type {string}
    * @memberof InvoiceApiGetInvoiceById
    */
    readonly partner: string
    
}

/**
 * Request parameters for listInvoices operation in InvoiceApi.
 * @export
 * @interface InvoiceApiListInvoicesRequest
 */
export type InvoiceApiListInvoicesRequest = {
    
    /**
    * Your Seel API key
    * @type {string}
    * @memberof InvoiceApiListInvoices
    */
    readonly xSeelApiKey: string
    
    /**
    * Version of the Seel API to use
    * @type {string}
    * @memberof InvoiceApiListInvoices
    */
    readonly xSeelApiVersion: string
    
    /**
    * partner name
    * @type {string}
    * @memberof InvoiceApiListInvoices
    */
    readonly partner: string
    
    /**
    * Query by page, default 0
    * @type {number}
    * @memberof InvoiceApiListInvoices
    */
    readonly page?: number
    
    /**
    * Query by page_size, default 100
    * @type {number}
    * @memberof InvoiceApiListInvoices
    */
    readonly pageSize?: number
    
}

/**
 * InvoiceApiGenerated - object-oriented interface
 * @export
 * @class InvoiceApiGenerated
 * @extends {BaseAPI}
 */
export class InvoiceApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get an invoice
     * @param {InvoiceApiGetInvoiceByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApiGenerated
     */
    public getInvoiceById(requestParameters: InvoiceApiGetInvoiceByIdRequest, options?: AxiosRequestConfig) {
        return InvoiceApiFp(this.configuration).getInvoiceById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List invoices
     * @param {InvoiceApiListInvoicesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApiGenerated
     */
    public listInvoices(requestParameters: InvoiceApiListInvoicesRequest, options?: AxiosRequestConfig) {
        return InvoiceApiFp(this.configuration).listInvoices(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}

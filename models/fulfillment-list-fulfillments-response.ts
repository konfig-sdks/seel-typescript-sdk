/*
Seel API

Seel API

The version of the OpenAPI document: 1.3.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Fulfillment } from './fulfillment';

/**
 * 
 * @export
 * @interface FulfillmentListFulfillmentsResponse
 */
export interface FulfillmentListFulfillmentsResponse {
    /**
     * Current page number.
     * @type {number}
     * @memberof FulfillmentListFulfillmentsResponse
     */
    'page'?: number;
    /**
     * Number of fulfillments per page.
     * @type {number}
     * @memberof FulfillmentListFulfillmentsResponse
     */
    'page_size'?: number;
    /**
     * Total number of fulfillments.
     * @type {number}
     * @memberof FulfillmentListFulfillmentsResponse
     */
    'total'?: number;
    /**
     * List of fulfillments.
     * @type {Array<Fulfillment>}
     * @memberof FulfillmentListFulfillmentsResponse
     */
    'fulfillments'?: Array<Fulfillment>;
}


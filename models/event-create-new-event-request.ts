/*
Seel API

Seel API

The version of the OpenAPI document: 1.3.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface EventCreateNewEventRequest
 */
export interface EventCreateNewEventRequest {
    /**
     * Session ID
     * @type {string}
     * @memberof EventCreateNewEventRequest
     */
    'session_id': string;
    /**
     * Event created timestamp in milliseconds
     * @type {string}
     * @memberof EventCreateNewEventRequest
     */
    'event_ts'?: string;
    /**
     * Customer ID
     * @type {string}
     * @memberof EventCreateNewEventRequest
     */
    'customer_id': string;
    /**
     * Device ID
     * @type {string}
     * @memberof EventCreateNewEventRequest
     */
    'device_id'?: string;
    /**
     * Browser IP address
     * @type {string}
     * @memberof EventCreateNewEventRequest
     */
    'client_ip'?: string;
    /**
     * Event source
     * @type {string}
     * @memberof EventCreateNewEventRequest
     */
    'event_source': string;
    /**
     * Event type
     * @type {string}
     * @memberof EventCreateNewEventRequest
     */
    'event_type': EventCreateNewEventRequestEventTypeEnum;
    /**
     * Each event_type has its own unique schema. For specific details, please refer to the custom pixel guide.
     * @type {object}
     * @memberof EventCreateNewEventRequest
     */
    'event_info': object;
}

type EventCreateNewEventRequestEventTypeEnum = 'product_page_enter' | 'product_page_exit' | 'product_share' | 'favorite_add' | 'favorite_remove' | 'cart_add' | 'cart_remove' | 'ra_checked' | 'ra_unchecked' | 'checkout_begin' | 'checkout_complete'



/*
Seel API

Seel API

The version of the OpenAPI document: 1.3.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Item } from './item';

/**
 * 
 * @export
 * @interface EventInfo
 */
export interface EventInfo {
    /**
     * Cart ID
     * @type {string}
     * @memberof EventInfo
     */
    'cart_id'?: string;
    /**
     * The list of items associated with the event.
     * @type {Array<Item>}
     * @memberof EventInfo
     */
    'items'?: Array<Item>;
    /**
     * Additional information for the event
     * @type {object}
     * @memberof EventInfo
     */
    'extra_info'?: object;
}


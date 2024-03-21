/*
Seel API

Seel API

The version of the OpenAPI document: 1.3.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Shipping origin
 * @export
 * @interface ItemShippingOrigin
 */
export interface ItemShippingOrigin {
    /**
     * The first line of the shipping address
     * @type {string}
     * @memberof ItemShippingOrigin
     */
    'address_1'?: string;
    /**
     * The second line of the shipping address
     * @type {string}
     * @memberof ItemShippingOrigin
     */
    'address_2'?: string;
    /**
     * The city of the shipping address
     * @type {string}
     * @memberof ItemShippingOrigin
     */
    'city'?: string;
    /**
     * The state or province code of the shipping address
     * @type {string}
     * @memberof ItemShippingOrigin
     */
    'state'?: string;
    /**
     * The zipcode of the shipping address
     * @type {string}
     * @memberof ItemShippingOrigin
     */
    'zipcode'?: string;
    /**
     * ISO 3166-1 alpha-2 country code of the shipping address
     * @type {string}
     * @memberof ItemShippingOrigin
     */
    'country': string;
}


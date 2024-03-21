/*
Seel API

Seel API

The version of the OpenAPI document: 1.3.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MerchantUpdateMerchantDetailsRequestSeelServicesInner } from './merchant-update-merchant-details-request-seel-services-inner';

/**
 * 
 * @export
 * @interface MerchantUpdateMerchantDetailsRequest
 */
export interface MerchantUpdateMerchantDetailsRequest {
    /**
     * The identifier for the shop or store within the partner\'s platform.
     * @type {string}
     * @memberof MerchantUpdateMerchantDetailsRequest
     */
    'shop_id'?: string;
    /**
     * The original subdomain domain for the shop provided by the ecommerce platform, e.g. subdomain.myshopify.com
     * @type {string}
     * @memberof MerchantUpdateMerchantDetailsRequest
     */
    'admin_domain'?: string;
    /**
     * The custom domain name assigned to the shop, e.g. www.myshop.com.
     * @type {string}
     * @memberof MerchantUpdateMerchantDetailsRequest
     */
    'shop_domain'?: string;
    /**
     * The source ecommerce platform for the shop, e.g. Shopify, BigCommerce.
     * @type {string}
     * @memberof MerchantUpdateMerchantDetailsRequest
     */
    'shop_platform'?: string;
    /**
     * 3-letter ISO 4217 currency code for the primary currency used in the shop, e.g. USD, EUR.
     * @type {string}
     * @memberof MerchantUpdateMerchantDetailsRequest
     */
    'shop_currency'?: string;
    /**
     * The registered business name for the shop.
     * @type {string}
     * @memberof MerchantUpdateMerchantDetailsRequest
     */
    'shop_name'?: string;
    /**
     * The registered business name for the merchant.
     * @type {string}
     * @memberof MerchantUpdateMerchantDetailsRequest
     */
    'contact_name'?: string;
    /**
     * The contact email address on file for the merchant.
     * @type {string}
     * @memberof MerchantUpdateMerchantDetailsRequest
     */
    'contact_email'?: string;
    /**
     * The phone number on file for the merchant.
     * @type {string}
     * @memberof MerchantUpdateMerchantDetailsRequest
     */
    'contact_phone_number'?: string;
    /**
     * 
     * @type {Array<MerchantUpdateMerchantDetailsRequestSeelServicesInner>}
     * @memberof MerchantUpdateMerchantDetailsRequest
     */
    'seel_services'?: Array<MerchantUpdateMerchantDetailsRequestSeelServicesInner>;
}


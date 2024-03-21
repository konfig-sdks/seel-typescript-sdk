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
 * @interface ContractCoveredItemsInner
 */
export interface ContractCoveredItemsInner {
    /**
     * The line item id covered by the contract.
     * @type {string}
     * @memberof ContractCoveredItemsInner
     */
    'line_item_id'?: string;
    /**
     * The quantity of the line item covered by the contract.
     * @type {number}
     * @memberof ContractCoveredItemsInner
     */
    'quantity'?: number;
    /**
     * The ID of the product.
     * @type {string}
     * @memberof ContractCoveredItemsInner
     */
    'product_id'?: string;
    /**
     * The ID of the product variant.
     * @type {string}
     * @memberof ContractCoveredItemsInner
     */
    'variant_id'?: string;
    /**
     * The tracking number associated with the asset shipment.
     * @type {string}
     * @memberof ContractCoveredItemsInner
     */
    'tracking_number'?: string;
    /**
     * The carrier used to ship the asset.
     * @type {string}
     * @memberof ContractCoveredItemsInner
     */
    'carrier'?: string;
    /**
     * The value covered by the contract.
     * @type {number}
     * @memberof ContractCoveredItemsInner
     */
    'covered_value'?: number;
}


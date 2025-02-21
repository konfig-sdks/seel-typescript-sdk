/*
Seel API

Seel API

The version of the OpenAPI document: 1.3.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContractCoveredItemsInner } from './contract-covered-items-inner';
import { Customer } from './customer';

/**
 * 
 * @export
 * @interface Contract
 */
export interface Contract {
    /**
     * The unique identifier of the contract.
     * @type {string}
     * @memberof Contract
     */
    'contract_id'?: string;
    /**
     * The identifier of the order associated with the contract.
     * @type {string}
     * @memberof Contract
     */
    'order_id'?: string;
    /**
     * The identifier of the quote associated with the contract.
     * @type {string}
     * @memberof Contract
     */
    'quote_id'?: string;
    /**
     * 
     * @type {Customer}
     * @memberof Contract
     */
    'customer'?: Customer;
    /**
     * The premium (i.e., cost) of the contract.
     * @type {number}
     * @memberof Contract
     */
    'premium'?: number;
    /**
     * The tax applied to the contract premium.
     * @type {number}
     * @memberof Contract
     */
    'premium_tax'?: number;
    /**
     * The currency of the contract.
     * @type {string}
     * @memberof Contract
     */
    'currency'?: string;
    /**
     * The current status of the contract (e.g., \"active\", \"cancelled\").
     * @type {string}
     * @memberof Contract
     */
    'status'?: ContractStatusEnum;
    /**
     * The timestamp in millisecond when the contract was cancelled (if applicable).
     * @type {string}
     * @memberof Contract
     */
    'cancelled_ts'?: string | null;
    /**
     * The timestamp in millisecond when the contract was created.
     * @type {string}
     * @memberof Contract
     */
    'created_ts'?: string | null;
    /**
     * The timestamp in millisecond when the contract was updated.
     * @type {string}
     * @memberof Contract
     */
    'updated_ts'?: string | null;
    /**
     * 
     * @type {Array<ContractCoveredItemsInner>}
     * @memberof Contract
     */
    'covered_items'?: Array<ContractCoveredItemsInner>;
}

type ContractStatusEnum = 'active' | 'cancelled' | 'pending'



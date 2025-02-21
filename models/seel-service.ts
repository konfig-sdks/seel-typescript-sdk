/*
Seel API

Seel API

The version of the OpenAPI document: 1.3.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SeelServiceCoveredItemsInner } from './seel-service-covered-items-inner';

/**
 * 
 * @export
 * @interface SeelService
 */
export interface SeelService {
    /**
     * Cover ID
     * @type {string}
     * @memberof SeelService
     */
    'contract_id'?: string;
    /**
     * The identifier of the quote associated with the contract.
     * @type {string}
     * @memberof SeelService
     */
    'quote_id'?: string;
    /**
     * Service created timestamp in milliseconds
     * @type {string}
     * @memberof SeelService
     */
    'created_ts'?: string;
    /**
     * Cover type of the service
     * @type {string}
     * @memberof SeelService
     */
    'type'?: string;
    /**
     * Price of the service
     * @type {number}
     * @memberof SeelService
     */
    'price'?: number;
    /**
     * The status of the service
     * @type {string}
     * @memberof SeelService
     */
    'status'?: SeelServiceStatusEnum;
    /**
     * The covered items
     * @type {Array<SeelServiceCoveredItemsInner>}
     * @memberof SeelService
     */
    'covered_items'?: Array<SeelServiceCoveredItemsInner>;
    /**
     * Additional information for the service
     * @type {object}
     * @memberof SeelService
     */
    'extra_info'?: object;
}

type SeelServiceStatusEnum = 'active' | 'cancelled' | 'pending'



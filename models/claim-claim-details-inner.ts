/*
Seel API

Seel API

The version of the OpenAPI document: 1.3.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ClaimClaimDetailsInnerClaimItemsInner } from './claim-claim-details-inner-claim-items-inner';

/**
 * 
 * @export
 * @interface ClaimClaimDetailsInner
 */
export interface ClaimClaimDetailsInner {
    /**
     * Items related to the claim
     * @type {Array<ClaimClaimDetailsInnerClaimItemsInner>}
     * @memberof ClaimClaimDetailsInner
     */
    'claim_items'?: Array<ClaimClaimDetailsInnerClaimItemsInner>;
    /**
     * This field exists when claim_type is delay, loss or theft.
     * @type {string}
     * @memberof ClaimClaimDetailsInner
     */
    'fulfillment_id'?: string;
}


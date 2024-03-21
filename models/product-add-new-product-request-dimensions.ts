/*
Seel API

Seel API

The version of the OpenAPI document: 1.3.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Product dimensions.
 * @export
 * @interface ProductAddNewProductRequestDimensions
 */
export interface ProductAddNewProductRequestDimensions {
    /**
     * Length of the product in centimeters.
     * @type {number}
     * @memberof ProductAddNewProductRequestDimensions
     */
    'length'?: number;
    /**
     * Width of the product in centimeters.
     * @type {number}
     * @memberof ProductAddNewProductRequestDimensions
     */
    'width'?: number;
    /**
     * Height of the product in centimeters.
     * @type {number}
     * @memberof ProductAddNewProductRequestDimensions
     */
    'height'?: number;
    /**
     * Unit of measurement (e.g., cm, in, ft, m).
     * @type {string}
     * @memberof ProductAddNewProductRequestDimensions
     */
    'unit'?: string;
}


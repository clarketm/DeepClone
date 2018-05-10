/*!
 *
 * DeepClone.js
 *
 * Author: Travis Clarke (travis.m.clarke@travismclarke.com)
 * Date: Wed, May 9, 2018
 * Version: 1.0.1
 *
 * The MIT License (MIT)

 * Copyright (c) 2018 - Travis Clarke - https://www.travismclarke.com

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * @typedef {object} Config
 * @property {boolean} [includeNonEnumerable=false]
 */

/**
 *
 * DeepClone
 *
 * @param {object} obj
 * @param {Config} [config={}]
 * @return {object} cloned object
 */
function DeepClone (obj, config = {}) {
  const {includeNonEnumerable = false} = config;

  return (function _DeepClone (item) {
    // Handle:
    // * null
    // * undefined
    // * boolean
    // * number
    // * string
    // * symbol
    // * function
    if (item === null || typeof item !== 'object') {
      return item;
    }

    // Handle:
    // * Date
    if (item instanceof Date) {
      return new Date(item.valueOf());
    }

    // Handle:
    // * Array
    if (item instanceof Array) {
      let copy = [];

      item.forEach((_, i) => (copy[i] = _DeepClone(item[i])));

      return copy;
    }

    // Handle:
    // * Object
    if (item instanceof Object) {
      let copy = {};

      // Handle:
      // * Object.symbol
      Object.getOwnPropertySymbols(item).forEach(
        s => (copy[s] = _DeepClone(item[s]))
      );

      // Handle:
      // * Object.name (other)
      if (includeNonEnumerable) {
        Object.getOwnPropertyNames(item).forEach(
          k => (copy[k] = _DeepClone(item[k]))
        );
      } else {
        Object.keys(item).forEach(k => (copy[k] = _DeepClone(item[k])));
      }

      return copy;
    }

    // Handle:
    // * Error
    throw new Error(`Unable to copy object: ${item}`);
  })(obj);
}

export default DeepClone;

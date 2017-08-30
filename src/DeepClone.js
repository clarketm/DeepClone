/*!
 *
 * DeepClone.js
 *
 * Author: Travis Clarke (travis.m.clarke@travismclarke.com)
 * Date: Fri, Aug 25, 2017
 * Version: 1.0.0
 *
 * The MIT License (MIT)

 * Copyright (c) 2017 - Travis Clarke - https://www.travismclarke.com

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

export default function DeepClone(obj) {   
  let copy;    

  // Handle null, undefined, and primitives
  if (obj === null || typeof obj !== "object") {
    return obj;    
  }

  // Handle Date   
  if (obj instanceof Date) {       
    copy = new Date(obj.valueOf());
    return copy;   
  }    

  // Handle Array   
  if (obj instanceof Array) {       
    copy = obj.slice(0);
    return copy;   
  }    

  // Handle Object   
  if (obj instanceof Object) {       
    copy = {};       
    for (let attr in obj) {           
      if (obj.hasOwnProperty(attr)) {
        // Recurse!
        copy[attr] = DeepClone(obj[attr]);       
      }
    }       
    return copy;   
  }    

  // Handle Error
  throw new Error(`Unable to copy object: ${obj}`);
}

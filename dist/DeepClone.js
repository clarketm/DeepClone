(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.DeepClone = factory());
}(this, (function () { 'use strict';

function DeepClone(a,b={}){const{includeNonEnumerable:c=!1}=b;return function a(b){if(null===b||"object"!=typeof b)return b;if(b instanceof Date)return new Date(b.valueOf());if(b instanceof Array){let c=[];return b.forEach((d,e)=>c[e]=a(b[e])),c}if(b instanceof Set){let c=new Set;return b.forEach(b=>c.add(a(b))),c}if(b instanceof Map){let c=new Map;return b.forEach((b,d)=>c.set(d,a(b))),c}if(b instanceof Object){let d={};return Object.getOwnPropertySymbols(b).forEach(c=>d[c]=a(b[c])),c?Object.getOwnPropertyNames(b).forEach(c=>d[c]=a(b[c])):Object.keys(b).forEach(c=>d[c]=a(b[c])),d}throw new Error(`Unable to copy object: ${b}`)}(a)}

return DeepClone;

})));

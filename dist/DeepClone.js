(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.DeepClone = factory());
}(this, (function () { 'use strict';

function DeepClone(a){let b;if(null===a||"object"!=typeof a)return a;if(a instanceof Date)return b=new Date(a.valueOf()),b;if(a instanceof Array)return b=a.slice(0),b;if(a instanceof Object){for(let c in b={},a)a.hasOwnProperty(c)&&(b[c]=DeepClone(a[c]));return b}throw new Error(`Unable to copy object: ${a}`)}

return DeepClone;

})));

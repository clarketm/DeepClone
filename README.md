# [DeepClone](https://www.travismclarke.com/deepclone/global.html#DeepClone)

Light-weight deep clone implementation for JavaScript.

[![NPM release](https://img.shields.io/npm/v/@clarketm/deepclone.svg)](https://www.npmjs.com/package/@clarketm/deepclone)
[![Build Status](https://circleci.com/gh/clarketm/DeepClone.svg?style=shield)](https://circleci.com/gh/clarketm/deepclone)

> ℹ️ For a standalone **Object** type with this deep clone implementation, check out the [super](https://github.com/clarketm/super) repository: [super/object](https://github.com/clarketm/super/tree/master/packages/Object#readme)

## Installation
```bash
$ npm install @clarketm/deepclone
```

## Modules

<dl>
<dt><a href="#module_DeepClone">DeepClone</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#exp_module_DeepClone--DeepClone">DeepClone(obj, [config])</a> ⇒ <code>object</code> ⏏</dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Config">Config</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="module_DeepClone"></a>

## DeepClone
<a name="exp_module_DeepClone--DeepClone"></a>

### DeepClone(obj, [config]) ⇒ <code>object</code> ⏏
**Kind**: global method of [<code>DeepClone</code>](#module_DeepClone)  
**Returns**: <code>object</code> - cloned object  

| Param | Type | Default |
| --- | --- | --- |
| obj | <code>object</code> |  | 
| [config] | [<code>Config</code>](#Config) | <code>{}</code> | 

**Example**  
```js
const clone = DeepClone({ key1: ["1", 1, true, (a, b) => a+b], [Symbol("key2")]: {s: "s"} });

console.log(clone);
// { key1: ["1", 1, true, (a, b) => a+b], Symbol("key2"): {s: "s"} }
```
<a name="Config"></a>

## Config : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| [includeNonEnumerable] | <code>boolean</code> | <code>false</code> | 


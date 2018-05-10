const DeepClone = require('../dist/DeepClone');
const {assert} = require('chai');

describe('#DeepClone', () => {
  let object, expected, actual;

  it('should clone object with `null` value', () => {
    object = {key: null};

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

  it('should clone object with `undefined` value', () => {
    object = {key: undefined};

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

  it('should clone object with `boolean` value', () => {
    object = {key: true};

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

  it('should clone object with `number` value', () => {
    object = {key: 1};

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

  it('should clone object with `string` value', () => {
    object = {key: 'a'};

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

  it('should clone object with `symbol` value', () => {
    object = {key: Symbol('a')};

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

  it('should clone object with `function` value', () => {
    object = {key: function () {}};

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

  it('should clone object with `date` value', () => {
    object = {key: new Date()};

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

  it('should clone object with `1d` `array` value', () => {
    object = {key: [1, 2, 3, 4]};

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

  it('should clone object with `2d` `array` value', () => {
    object = {key: [[1], [2], [3], [4]]};

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

  it('should clone object with `1d` `object` value', () => {
    object = {key: {a: 1, b: 2, c: 3}};

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

  it('should clone object with `1d` `object` value', () => {
    object = {key: {a: {a1: 1}, b: {b1: 1}, c: {a1: 1}}};

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

  it('should clone object with `all` types of values', () => {
    object = {
      a: null,
      b: undefined,
      c: true,
      d: 12,
      e: 'hi',
      f: [1, 2, {b: 4}],
      g: [1, 2, {b: 4}],
      [Symbol('abc')]: 3,
      [123]: {[123]: ['k', false]},
      $: new Date(),
      [new Map([['@', '#']])]: () => 3,
      go (where = 'house') {
        return `where: ${where}`;
      },
      any: {
        f1: {
          f2: {
            f3: {
              f4: Symbol('abc')
            }
          }
        }
      }
    };

    expected = object;
    actual = DeepClone(object);

    assert.deepEqual(actual, expected);
  });

});
////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import Json from '@qubit-ltd/json';

/**
 * 将某个字段值正则化为表示整数的 `Number` 或 `bigint` 对象。
 *
 * @param {any} value
 *     待正则化的字段值。
 * @returns {number|bigint|null}
 *     正则化的结果。如果输入值为 `null`、`undefined` 或空字符串（经过 `trim()` 后），
 *     则返回 `null`。
 * @throws {TypeError}
 *     如果输入值的类型不是 `bigint`、`string`、`String`、`number` 或 `Number`。
 * @throws {RangeError}
 *     如果输入字符串不是有效的整数形式，或者输入数字不是整数。
 */
function normalizeInteger(value) {
  if (value === undefined || value === null) {
    return null;
  }
  if (typeof value === 'bigint') {
    return value; // support native bigint
  }
  if (typeof value === 'string' || value instanceof String) {
    const val = value.trim();
    if (val === '') {
      return null;
    }
    if (/^[+-]?\d+$/.test(val)) {
      return Json.parse(val);
    }
    throw new RangeError(`Invalid integer format: "${value}"`);
  }
  if (typeof value === 'number' || value instanceof Number) {
    const val = Number(value); // 将 wrapped object 转换为 primitive
    if (Number.isInteger(val)) {
      return Math.floor(val); // 删除小数点后面可能的 0
    }
    throw new RangeError(`Invalid integer value: "${value}"`);
  }
  throw new TypeError(`Invalid integer type: actual type is ${typeof value}`);
}

export default normalizeInteger;

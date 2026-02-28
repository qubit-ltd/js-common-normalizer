////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 将某个字段值正则化为 `boolean` 值。
 *
 * @param {any} value
 *     待正则化的字段值。
 * @returns {boolean}
 *     正则化的结果。
 * @throws {TypeError}
 *     如果输入值的类型不是 `boolean`、`Boolean`、`string` 或 `String`。
 * @throws {RangeError}
 *     如果输入字符串不是有效的布尔值形式。
 */
function normalizeBool(value) {
  if (typeof value === 'boolean') {
    return value;
  } else if (value instanceof Boolean) {
    return value.valueOf();
  } else if ((typeof value === 'string') || (value instanceof String)) {
    const val = value.trim().toLowerCase();
    if (val === 'true') {
      return true;
    } else if (val === 'false') {
      return false;
    } else {
      throw new RangeError(`Invalid boolean format: ${value}`);
    }
  } else {
    throw new TypeError(`Invalid boolean type: actual type is ${typeof value}`);
  }
}

export default normalizeBool;

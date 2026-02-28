////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import dayjs from './dayjs-with-utc';

/**
 * 将某个字段值正则化为表示日期时间的字符串。
 *
 * @param {any} value
 *     待正则化的字段值。
 * @param {string[]} parseFormats
 *     自定义日期时间解析格式列表。
 * @param {string} displayFormat
 *     自定义的日期时间显示格式。
 * @returns {string}
 *     正则化的结果；若输入值为 `null`、`undefined` 或空字符串，则返回空字符串。
 * @throws {TypeError}
 *     如果输入值的类型不是字符串或 `Date` 对象。
 * @throws {RangeError}
 *     如果输入值无法解析为有效的日期时间。
 * @author Haixing Hu
 * @private
 */
function normalizeDateTimeImpl(value, parseFormats, displayFormat) {
  if (value === undefined || value === null) {
    return '';
  }
  if (typeof value === 'string' || value instanceof String) {
    const val = value.trim();
    if (val === '') {
      return '';
    }
    // 注意: customParseFormat插件如果以数组形式传递自定义解析格式，则不能正确处理时区
    // 参考这个issue: https://github.com/iamkun/dayjs/issues/1750
    let date = null;
    for (const format of parseFormats) {
      const t = dayjs.utc(val, format, false);
      if (t.isValid()) {
        date = t; // 永远使用后面的匹配，即更严格的匹配
      }
    }
    if (date === null) {
      throw new RangeError(`Invalid date value: ${value}`);
    }
    return date.format(displayFormat);
  }
  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) {
      throw new RangeError(`Invalid date value: ${value}`);
    }
    return dayjs(value).format(displayFormat);
  }
  throw new TypeError(`Invalid date time type: actual type is ${typeof value}`);
}

export default normalizeDateTimeImpl;

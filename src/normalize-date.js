////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import normalizeDateTimeImpl from './impl/normalize-date-time-impl';

/**
 * 可解析的日期格式。
 */
const PARSE_FORMATS = [
  'YYYY-M-D',
  'YYYY/M/D',
];

/**
 * 日期的标准显示格式。
 */
const DISPLAY_FORMAT = 'YYYY-MM-DD';

/**
 * 将某个字段值正则化为表示日期的字符串。
 *
 * 日期的标准显示格式为 `YYYY-MM-DD`。
 *
 * @param {any} value
 *     待正则化的字段值。
 * @returns {string}
 *     正则化的结果。如果输入值为 `null`、`undefined` 或空字符串（经过 `trim()` 后），
 *     则返回空字符串。
 * @throws {TypeError}
 *     如果输入值的类型不正确。
 * @throws {RangeError}
 *     如果输入值无法解析为有效的日期。
 */
function normalizeDate(value) {
  return normalizeDateTimeImpl(value, PARSE_FORMATS, DISPLAY_FORMAT);
}

export default normalizeDate;

////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { normalizeBool } from '../src';

describe('normalizeBool', () => {
  test('should return true for boolean true', () => {
    const result = normalizeBool(true);
    expect(result).toBe(true);
  });

  test('should return false for boolean false', () => {
    const result = normalizeBool(false);
    expect(result).toBe(false);
  });

  test('should return true for string "true"', () => {
    const result = normalizeBool('true');
    expect(result).toBe(true);
  });

  test('should return false for string "false"', () => {
    const result = normalizeBool('false');
    expect(result).toBe(false);
  });

  test('should return true for string " true " with spaces', () => {
    const result = normalizeBool(' true ');
    expect(result).toBe(true);
  });

  test('should return false for string " false " with spaces', () => {
    const result = normalizeBool(' false ');
    expect(result).toBe(false);
  });

  test('should return true for Boolean object true', () => {
    // eslint-disable-next-line no-new-wrappers
    const result = normalizeBool(new Boolean(true));
    expect(result).toBe(true);
  });

  test('should return false for Boolean object false', () => {
    // eslint-disable-next-line no-new-wrappers
    const result = normalizeBool(new Boolean(false));
    expect(result).toBe(false);
  });

  test('should return true for String object "true"', () => {
    // eslint-disable-next-line no-new-wrappers
    const result = normalizeBool(new String('true'));
    expect(result).toBe(true);
  });

  test('should return false for String object "false"', () => {
    // eslint-disable-next-line no-new-wrappers
    const result = normalizeBool(new String('false'));
    expect(result).toBe(false);
  });

  test('should throw RangeError for invalid boolean string', () => {
    expect(() => normalizeBool('invalid')).toThrow(RangeError);
    expect(() => normalizeBool('invalid')).toThrow('Invalid boolean format: invalid');
  });

  test('should throw TypeError for non-boolean and non-string input', () => {
    expect(() => normalizeBool(123)).toThrow(TypeError);
    expect(() => normalizeBool(123)).toThrow('Invalid boolean type: actual type is number');
  });

  test('should throw TypeError for null input', () => {
    expect(() => normalizeBool(null)).toThrow(TypeError);
    expect(() => normalizeBool(null)).toThrow('Invalid boolean type: actual type is object');
  });

  test('should throw TypeError for undefined input', () => {
    expect(() => normalizeBool(undefined)).toThrow(TypeError);
    expect(() => normalizeBool(undefined)).toThrow('Invalid boolean type: actual type is undefined');
  });
});

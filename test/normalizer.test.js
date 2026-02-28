////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { trimString, trimUppercaseString, stringToFloat, stringToMoney } from '@qubit-ltd/common-util';
import Normalizer from '../src/normalizer';
import normalizeDate from '../src/normalize-date';
import normalizeDateTime from '../src/normalize-date-time';
import normalizeTime from '../src/normalize-time';
import normalizeTimestamp from '../src/normalize-timestamp';
import normalizeInteger from '../src/normalize-integer';
import normalizeBool from '../src/normalize-bool';

describe('Normalizer', () => {
  test('should export the correct normalizer functions', () => {
    expect(Normalizer.bool).toBe(normalizeBool);
    expect(Normalizer.date).toBe(normalizeDate);
    expect(Normalizer.datetime).toBe(normalizeDateTime);
    expect(Normalizer.time).toBe(normalizeTime);
    expect(Normalizer.timestamp).toBe(normalizeTimestamp);
    expect(Normalizer.number).toBe(stringToFloat);
    expect(Normalizer.id).toBe(normalizeInteger);
    expect(Normalizer.int).toBe(normalizeInteger);
    expect(Normalizer.mobile).toBe(trimUppercaseString);
    expect(Normalizer.money).toBe(stringToMoney);
    expect(Normalizer.personName).toBe(trimUppercaseString);
    expect(Normalizer.phone).toBe(trimUppercaseString);
    expect(Normalizer.url).toBe(trimString);
    expect(Normalizer.email).toBe(trimString);
    expect(Normalizer.trim).toBe(trimString);
    expect(Normalizer.trimUppercase).toBe(trimUppercaseString);
  });
});

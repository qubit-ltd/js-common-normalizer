# @qubit-ltd/common-normalizer

[![npm package](https://img.shields.io/npm/v/@qubit-ltd/common-normalizer.svg)](https://npmjs.com/package/@qubit-ltd/common-normalizer)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![中文文档](https://img.shields.io/badge/文档-中文版-blue.svg)](README.zh_CN.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/qubit-ltd/js-common-normalizer/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/qubit-ltd/js-common-normalizer/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/qubit-ltd/js-common-normalizer/badge.svg?branch=master)](https://coveralls.io/github/qubit-ltd/js-common-normalizer?branch=master)

[@qubit-ltd/common-normalizer] is a JavaScript ES6 library that provides a set of utility functions for normalizing common fields in web applications. It helps standardize data formats for various types such as booleans, dates, numbers, and more, making data handling more consistent and reliable.

## <span id="installation">Installation</span>

Install with npm:

```bash
npm install @qubit-ltd/common-normalizer
```

Or with yarn:

```bash
yarn add @qubit-ltd/common-normalizer
```

## <span id="usage">Usage</span>

This library provides various functions for normalizing different types of data:

```javascript
import {
  normalizeBool,         // normalize boolean values
  normalizeInteger,      // normalize integers
  normalizeDate,         // normalize dates
  normalizeDateTime,     // normalize date-time
  normalizeTime,         // normalize time
  normalizeTimestamp,    // normalize timestamps
  Normalizer,            // Normalizer object with all functions
} from '@qubit-ltd/common-normalizer';

// Normalize boolean values
const boolResult = normalizeBool('true');  // returns true
const boolResult2 = normalizeBool('false'); // returns false
// Invalid inputs will throw errors
// normalizeBool('yes') would throw a RangeError

// Normalize integers
const intResult = normalizeInteger('123'); // returns 123
const intResult2 = normalizeInteger(''); // returns null

// Normalize dates
const dateResult = normalizeDate('2023-5-15'); // returns '2023-05-15'
const dateResult2 = normalizeDate('2023/5/15'); // returns '2023-05-15'

// Normalize date-time
const dateTimeResult = normalizeDateTime('2023-5-15 14:30:25'); // returns '2023-05-15 14:30:25'

// Normalize time
const timeResult = normalizeTime('14:30:25'); // returns '14:30:25'

// Normalize timestamps
const timestampResult = normalizeTimestamp('2023-5-15 14:30:25'); // returns Unix timestamp
```

### Using the Normalizer Object

The library also provides a convenient `Normalizer` object with all normalization functions:

```javascript
import { Normalizer } from '@qubit-ltd/common-normalizer';

// Normalizing various data types
const boolValue = Normalizer.bool('true');           // returns true
const intValue = Normalizer.int('123');              // returns 123
const dateValue = Normalizer.date('2023-5-15');      // returns '2023-05-15'
const datetimeValue = Normalizer.datetime('2023-5-15 14:30:25'); // returns '2023-05-15 14:30:25'
const timeValue = Normalizer.time('14:30:25');       // returns '14:30:25'
const trimmedValue = Normalizer.trim('  Hello  ');   // returns 'Hello'

// The Normalizer also includes other utility functions
const trimUpperValue = Normalizer.trimUppercase('  test  '); // returns 'TEST'
const numberValue = Normalizer.number('123.45');     // returns 123.45
const moneyValue = Normalizer.money('1234.56');     // formats as currency
```

For more detailed usage examples, please refer to the API documentation.

## <span id="api">API Documentation</span>

Full API documentation can be found at the [project documentation site](https://haixing-hu.github.io/js-common-normalizer/).

### Available Normalizers

The library provides the following normalization functions:

- **normalizeBool**: Normalizes values to boolean (true/false)
- **normalizeInteger**: Normalizes values to integers
- **normalizeDate**: Normalizes date strings to format 'YYYY-MM-DD'
- **normalizeDateTime**: Normalizes date-time strings to format 'YYYY-MM-DD HH:mm:ss'
- **normalizeTime**: Normalizes time strings to format 'HH:mm:ss'
- **normalizeTimestamp**: Normalizes date-time strings to Unix timestamps

The `Normalizer` object also includes additional utility functions for:
- **number**: Converting strings to floating-point numbers
- **money**: Formatting monetary values
- **trim**: Trimming whitespace from strings
- **trimUppercase**: Trimming whitespace and converting to uppercase
- **mobile**, **phone**, **personName**, **email**, and other common field types

## <span id="contributing">Contributing</span>

If you find any issues or have suggestions for improvements, please feel free
to open an issue or submit a pull request to the [GitHub repository].

## <span id="license">License</span>

[@qubit-ltd/common-normalizer] is distributed under the Apache 2.0 license.
See the [LICENSE](LICENSE) file for more details.

[@qubit-ltd/common-normalizer]: https://npmjs.com/package/@qubit-ltd/common-normalizer
[GitHub repository]: https://github.com/qubit-ltd/js-common-normalizer

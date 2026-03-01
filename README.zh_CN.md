# @qubit-ltd/common-normalizer

[![npm package](https://img.shields.io/npm/v/@qubit-ltd/common-normalizer.svg)](https://npmjs.com/package/@qubit-ltd/common-normalizer)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![English Document](https://img.shields.io/badge/Document-English-blue.svg)](README.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/qubit-ltd/js-common-normalizer/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/qubit-ltd/js-common-normalizer/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/qubit-ltd/js-common-normalizer/badge.svg?branch=master)](https://coveralls.io/github/qubit-ltd/js-common-normalizer?branch=master)

[@qubit-ltd/common-normalizer] 是一个JavaScript ES6库，提供了一系列用于规范化Web应用程序中常见字段的工具函数。它可以帮助标准化各种数据类型（如布尔值、日期、数字等）的格式，使数据处理更加一致和可靠。

## <span id="installation">安装</span>

使用npm安装：

```bash
npm install @qubit-ltd/common-normalizer
```

或者使用yarn安装：

```bash
yarn add @qubit-ltd/common-normalizer
```

## <span id="usage">使用方法</span>

此库提供了多种用于规范化不同类型数据的函数：

```javascript
import {
  normalizeBool,         // 规范化布尔值
  normalizeInteger,      // 规范化整数
  normalizeDate,         // 规范化日期
  normalizeDateTime,     // 规范化日期时间
  normalizeTime,         // 规范化时间
  normalizeTimestamp,    // 规范化时间戳
  Normalizer,            // 包含所有函数的规范化器对象
} from '@qubit-ltd/common-normalizer';

// 规范化布尔值
const boolResult = normalizeBool('true');  // 返回 true
const boolResult2 = normalizeBool('false'); // 返回 false
// 无效输入将抛出错误
// normalizeBool('是') 将抛出 RangeError

// 规范化整数
const intResult = normalizeInteger('123'); // 返回 123
const intResult2 = normalizeInteger(''); // 返回 null

// 规范化日期
const dateResult = normalizeDate('2023-5-15'); // 返回 '2023-05-15'
const dateResult2 = normalizeDate('2023/5/15'); // 返回 '2023-05-15'

// 规范化日期时间
const dateTimeResult = normalizeDateTime('2023-5-15 14:30:25'); // 返回 '2023-05-15 14:30:25'

// 规范化时间
const timeResult = normalizeTime('14:30:25'); // 返回 '14:30:25'

// 规范化时间戳
const timestampResult = normalizeTimestamp('2023-5-15 14:30:25'); // 返回 Unix 时间戳
```

### 使用 Normalizer 对象

该库还提供了一个方便的 `Normalizer` 对象，包含所有规范化函数：

```javascript
import { Normalizer } from '@qubit-ltd/common-normalizer';

// 规范化各种数据类型
const boolValue = Normalizer.bool('true');           // 返回 true
const intValue = Normalizer.int('123');              // 返回 123
const dateValue = Normalizer.date('2023-5-15');      // 返回 '2023-05-15'
const datetimeValue = Normalizer.datetime('2023-5-15 14:30:25'); // 返回 '2023-05-15 14:30:25'
const timeValue = Normalizer.time('14:30:25');       // 返回 '14:30:25'
const trimmedValue = Normalizer.trim('  你好  ');   // 返回 '你好'

// Normalizer 还包括其他工具函数
const trimUpperValue = Normalizer.trimUppercase('  test  '); // 返回 'TEST'
const numberValue = Normalizer.number('123.45');     // 返回 123.45
const moneyValue = Normalizer.money('1234.56');     // 格式化为货币
```

更多详细的使用示例，请参考API文档。

## <span id="api">API文档</span>

完整的API文档可以在[项目文档页面](https://haixing-hu.github.io/js-common-normalizer/)中找到。

### 可用的规范化器

该库提供以下规范化函数：

- **normalizeBool**: 将值规范化为布尔值（true/false）
- **normalizeInteger**: 将值规范化为整数
- **normalizeDate**: 将日期字符串规范化为格式 'YYYY-MM-DD'
- **normalizeDateTime**: 将日期时间字符串规范化为格式 'YYYY-MM-DD HH:mm:ss'
- **normalizeTime**: 将时间字符串规范化为格式 'HH:mm:ss'
- **normalizeTimestamp**: 将日期时间字符串规范化为Unix时间戳

`Normalizer` 对象还包括以下额外的工具函数：
- **number**: 将字符串转换为浮点数
- **money**: 格式化货币值
- **trim**: 去除字符串两端的空白
- **trimUppercase**: 去除空白并转换为大写
- **mobile**, **phone**, **personName**, **email** 和其他常见字段类型

## <span id="contributing">贡献</span>

如果您发现任何问题或有改进建议，请随时在[GitHub仓库]上提交issue或pull request。

## <span id="license">许可证</span>

[@qubit-ltd/common-normalizer]在Apache 2.0许可证下分发。
更多详情请参阅[LICENSE](LICENSE)文件。

[@qubit-ltd/common-normalizer]: https://npmjs.com/package/@qubit-ltd/common-normalizer
[GitHub仓库]: https://github.com/qubit-ltd/js-common-normalizer 
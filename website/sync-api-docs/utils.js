/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const he = require('he');
const magic = require('./magic');

// Wraps a string in an inline code block in a way that is safe to include in a
// table cell, by wrapping it as HTML <code> if necessary.
function stringToInlineCodeForTable(str) {
  let useHtml = /[`|]/.test(str);
  str = str.replace(/\n/g, ' ');
  if (useHtml) {
    return '<code>' + he.encode(str).replace(/\|/g, '&#124;') + '</code>';
  }
  return '`' + str + '`';
}

function maybeLinkifyType(flowType) {
  let url, text;
  flowType.elements?.forEach(elem => {
    if (Object.hasOwnProperty.call(magic.linkableTypeAliases, elem.name)) {
      ({url, text} = magic.linkableTypeAliases[elem.name]);
    }
  });
  if (!text) {
    text = stringToInlineCodeForTable(
      flowType.raw || formatType(flowType.name)
    );
  }
  if (url) {
    return `[${text}](${url})`;
  }
  return text;
}

function formatType(name) {
  if (name.toLowerCase() === 'boolean') return 'bool';
  if (name.toLowerCase() === 'stringish') return 'string';
  if (name === '$ReadOnlyArray') return 'array';
  return name;
}

function maybeLinkifyTypeName(name) {
  let url, text;
  if (Object.hasOwnProperty.call(magic.linkableTypeAliases, name)) {
    ({url, text} = magic.linkableTypeAliases[name]);
  }
  if (!text) {
    text = stringToInlineCodeForTable(name);
  }
  if (url) {
    return `[${text}](${url})`;
  }
  return text;
}

function titleToId(title) {
  return title.toLowerCase().replace(/[^a-z]+/g, '-');
}

module.exports = {
  stringToInlineCodeForTable,
  maybeLinkifyType,
  maybeLinkifyTypeName,
  formatType,
  titleToId,
};

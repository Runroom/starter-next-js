const { stylelintConfig } = require('@runroom/npm-scripts');

stylelintConfig.rules['at-rule-no-unknown'] = [
  true,
  {
    ignoreAtRules: [
      'define-mixin',
      'mixin',
      'mixin-content',
      'function',
      'if',
      'each',
      'include',
      'mixin',
      'extend',
      'else',
      'return',
      'content',
      'at-root',
      'use',
      'error',
      'custom-media'
    ]
  }
];

module.exports = stylelintConfig;

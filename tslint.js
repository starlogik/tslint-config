module.exports = {
  defaultSeverity: 'error',
  extends: [
    'tslint:recommended',
    'tslint-config-standard',
    'tslint-react',
    'tslint-config-prettier'
  ],
  jsRules: {},
  rules: {
    'array-type': [true, 'generic'],
    'curly': false,
    'forin': false,
    'jsx-no-lambda': false,
    'jsx-boolean-value': false,
    'member-ordering': false,
    'no-bitwise': false,
    'no-empty': false,
    'only-arrow-functions': false,
    'object-literal-sort-keys': false,
    'one-variable-per-declaration': false,
    'ordered-imports': false
  },
  rulesDirectory: []
};

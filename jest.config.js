const merge = require('lodash.merge')
const jestConfig = require('@holaluz/npm-scripts').jest

module.exports = merge(jestConfig, {
  transform: {
    '.+\\.(css|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
})

const getPackageDotJSON = require('../get-package-dot-json')

const reduxDependencies = {
  'lodash': '^4.2.1',
  'lodash-es': '^4.2.1',
  'loose-envify': '^1.1.0',
  'symbol-observable': '^1.0.3'
}

const reduxDevDependencies = {
  'babel-cli': '^6.3.15',
  'babel-core': '^6.3.15',
  'babel-eslint': '^7.0.0',
  'babel-jest': '^18.0.0',
  'babel-plugin-check-es2015-constants': '^6.3.13',
  'babel-plugin-transform-es2015-arrow-functions': '^6.3.13',
  'babel-plugin-transform-es2015-block-scoped-functions': '^6.3.13',
  'babel-plugin-transform-es2015-block-scoping': '^6.3.13',
  'babel-plugin-transform-es2015-classes': '^6.3.13',
  'babel-plugin-transform-es2015-computed-properties': '^6.3.13',
  'babel-plugin-transform-es2015-destructuring': '^6.3.13',
  'babel-plugin-transform-es2015-for-of': '^6.3.13',
  'babel-plugin-transform-es2015-function-name': '^6.3.13',
  'babel-plugin-transform-es2015-literals': '^6.3.13',
  'babel-plugin-transform-es2015-modules-commonjs': '^6.3.13',
  'babel-plugin-transform-es2015-object-super': '^6.3.13',
  'babel-plugin-transform-es2015-parameters': '^6.3.13',
  'babel-plugin-transform-es2015-shorthand-properties': '^6.3.13',
  'babel-plugin-transform-es2015-spread': '^6.3.13',
  'babel-plugin-transform-es2015-sticky-regex': '^6.3.13',
  'babel-plugin-transform-es2015-template-literals': '^6.3.13',
  'babel-plugin-transform-es2015-unicode-regex': '^6.3.13',
  'babel-plugin-transform-es3-member-expression-literals': '^6.5.0',
  'babel-plugin-transform-es3-property-literals': '^6.5.0',
  'babel-plugin-transform-object-rest-spread': '^6.3.13',
  'babel-register': '^6.3.13',
  'check-es3-syntax-cli': '^0.1.1',
  'cross-env': '^3.1.4',
  'eslint': '^3.8.1',
  'eslint-config-react-app': '^0.5.0',
  'eslint-plugin-flowtype': '^2.29.2',
  'eslint-plugin-import': '^2.2.0',
  'eslint-plugin-jsx-a11y': '2.2.3',
  'eslint-plugin-react': '^6.8.0',
  'gitbook-cli': '^2.3.0',
  'glob': '^7.1.1',
  'jest': '^18.0.0',
  'rimraf': '^2.3.4',
  'rollup': '^0.41.4',
  'rollup-plugin-babel': '^2.7.1',
  'rollup-plugin-node-resolve': '^2.0.0',
  'rollup-plugin-replace': '^1.1.1',
  'rollup-plugin-uglify': '^1.0.1',
  'rxjs': '^5.0.0-beta.6',
  'typescript': '^1.8.0',
  'typescript-definition-tester': '0.0.4'
}

test('get redux package.json', async () => {
  const {
    dependencies = null,
    devDependencies = null
  } = await getPackageDotJSON('https://raw.githubusercontent.com/reactjs/redux/master/package.json')

  expect(dependencies).toEqual(reduxDependencies)
  expect(devDependencies).toEqual(reduxDevDependencies)
})

test('get meteor package.json and fail', async () => {
  await expect(getPackageDotJSON('https://raw.githubusercontent.com/meteor/meteor/devel/package.json')).rejects
})

import globals from 'globals'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'

import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'

// mimic CommonJS variables -- not needed if using CommonJS
const _fileName = fileURLToPath(import.meta.url)
const _dirName = path.dirname(_fileName)
const compat = new FlatCompat({
  baseDirectory: _dirName,
  recommendedConfig: pluginJs.configs.recommended
})

export default [
  {
    languageOptions: { globals: globals.browser },
    files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
    ignores: ['*.config.*']
  },
  ...compat.extends('standard-with-typescript'),
  pluginReactConfig
]

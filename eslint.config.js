import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPlugin from 'eslint-plugin-eslint-plugin'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginReact from 'eslint-plugin-react'

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      prettier: eslintPluginPrettier,
      react: eslintPluginReact,
      eslint: eslintPlugin
    },
    rules: {
      ...eslintConfigPrettier.rules,

      // Prettier integration
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          useTabs: false,
          tabWidth: 2,
          trailingComma: 'none',
          bracketSpacing: true,
          arrowParens: 'always',
          endOfLine: 'auto',
          embeddedLanguageFormatting: 'auto',
          plugins: ['prettier-plugin-tailwindcss']
        }
      ]
    }
  }
]

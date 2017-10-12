const { promisify } = require('util')
const { writeFileSync } = require('fs')
const { resolve } = require('path')

const sass = require('node-sass')
const sassExtract = require('sass-extract')

const render = promisify(sass.render)
const extract = sassExtract.extract

const file = require.resolve('ustyle/vendor/assets/stylesheets/ustyle/basics/variables/_colors.scss')
const sLowerCamelCase = (s) => s
      .split(/[-_]/)
      .reduce((acc, [ first, ...rest ], i) => `${acc}${i === 0 ? first : first.toUpperCase()}${rest.join('')}`, '')

const generatedComment = `/*
  This file is auto-generated at build time, do not edit!
*/
`

render({ file })
  .then(extract)
  .then(({ global }) => {
    const colors = Object
          .entries(global)
          .map(([key, { value }]) => `export const ${sLowerCamelCase(key).slice(1)} = '${value.hex}'`)
          .reduce((acc, it) => `${acc}\n${it}`, '')

    writeFileSync(resolve(__dirname, '../src/colors.js'), `${generatedComment}${colors}`)
  })

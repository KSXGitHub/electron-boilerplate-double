'use strict'
const {resolve} = require('path')
const convert = require('electron-windows-store')
const appInfo = require('../../app/package.json')

const projdir = resolve(__dirname, '../..')
const distdir = resolve(projdir, 'dist')
const inputDirectory = resolve(distdir, 'win-unpacked')
const outputDirectory = resolve(distdir, 'appx')

const packageName = appInfo.name
const packageDisplayName = packageName
  .split('-')
  .map(string => {
    const [first, ...rest] = string
    return first.toUpperCase() + rest.join('')
  })
  .join('')

convert({
  packageVersion: appInfo.version,
  packageDescription: appInfo.description,
  publisher: 'CN=developmentca',
  containerVirtualization: false,
  flatten: true,
  packageName,
  packageDisplayName,
  inputDirectory,
  outputDirectory
})

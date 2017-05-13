'use strict'
const {resolve} = require('path')
const {exit} = require('process')
const convert = require('electron-windows-store')
const appInfo = require('../../app/package.json')

const projdir = resolve(__dirname, '../..')
const distdir = resolve(projdir, 'dist')
const inputDirectory = resolve(distdir, 'win-ia32-unpacked')
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
  containerVirtualization: false,
  flatten: true,
  packageName,
  packageDisplayName,
  inputDirectory,
  outputDirectory
}).then(
  value => {
    console.log('Convert result', {value})
    console.log('Directory', {outputDirectory}, require('fs').readdirSync(outputDirectory))
    exit(0)
  }
).catch(
  error => {
    console.log('Errored', {error})
    exit(1)
  }
)

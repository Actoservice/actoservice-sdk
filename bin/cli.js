#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const request = require('request');

const packageJson = require(
  path.join(process.cwd(), 'package.json')
);

if (!packageJson) {
  throw new Error('Cannot find package.json');
}

const defaultConfig = {
  entry: './index.js',
  name: packageJson.name,
  version: packageJson.version,
  configMap: './actoservice.json',
  description: packageJson.description
}

const config = Object.assign({}, defaultConfig, packageJson.actoservice);

const rootRelativeEntry = path.join(process.cwd(), config.entry);
const rootRelativeConfigMap = path.join(process.cwd(), config.configMap);

let preData = {
  name: config.name,
  description: config.description,
  source: fs.createReadStream(rootRelativeEntry),
  configMap: fs.createReadStream(rootRelativeConfigMap)
}

const entryFileName = path.basename(config.entry);
const schemeFilename = path.basename(config.configMap);

if (config.assets && fs.lstatSync(config.assets).isDirectory()) {
  const assets = fs
    .readdirSync(config.assets)
    .filter((filename) =>
      filename !== entryFileName &&
      filename !== schemeFilename &&
      !filename.includes('html')
    )
    .reduce((all, curr) => {
      const absPath = path.join(process.cwd(), config.assets, curr);
      return {
        ...all,
        [path.basename(curr)]: fs.createReadStream(absPath)
      }
    }, {});

  preData = {
    ...preData,
    ...assets
  }
}

const HOST = 'http://0.0.0.0:3000/api/v1/themes';

upload(preData);

function upload(data) {
  request.post({ url: HOST, formData: data }, (err, res, body) => {
    if (err) {
      return console.error('upload failed', err);
    }
    console.log('upload successful', body);
  });
}
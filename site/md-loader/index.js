
const md = require('./config');

module.exports = function(source) {

  return `<template>
            <div>${source}</div>
          </template>`
}
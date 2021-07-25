
const md = require('./config');

module.exports = function(source) {

  const content = md.render(source);
  
  return `<template>
            <div>${content}</div>
          </template>`
}
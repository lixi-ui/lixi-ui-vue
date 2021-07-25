const Config = require('markdown-it-chain');
const anchorPlugin = require('markdown-it-anchor');


const config = new Config();

config
  .options.html(true).end().plugin("anchor").use(anchorPlugin,[{
    level: 2,
    permalink: true,
    permalinkBefore: true,
  }]).end()

console.log("config.toMd", config.toMd);
const md = config.toMd()
// overWriteFenceRule(md)

module.exports = md;
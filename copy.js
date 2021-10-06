var fs = require( 'fs' );
var stat = fs.stat;
var componments = require('./components');

console.log('componments', componments);

var srcPath = '../element-plus/website/docs/';
var dstPath = './src/components/'

var lang = ['en-US','es', 'fr-FR','zh-CN','jp']

function copy (src, dst) {
  for (let i = 0; i < lang.length; i++) {
    stat(src + lang[i] +'/affix.md', function(err,st){
      if(err){
        return;
      }
      if (st.isFile()){
        fs.readFile(src + lang[i] +'/affix.md', 'utf-8', function(err,data){
          if (err) {
            console.log('readFile err', err)
          } else {
            console.log(data)
            fs.writeFile(dst + 'affix' + '/doc/index.' + lang[i] + '.md',data,function(err){
              console.log(err)
            })
          }
        })
        // console.log('file', st.isFile() , lang[i])
      }
    })
  }
  
}

copy(srcPath, dstPath)

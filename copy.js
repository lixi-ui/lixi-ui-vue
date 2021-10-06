var fs = require( 'fs' );
var stat = fs.stat;
var componments = require('./components');

var srcPath = '../element-plus/website/docs/';
var dstPath = './src/components/'

var lang = ['en-US','es', 'fr-FR','zh-CN','jp']

function copy (src, dst) {
  for (let i = 0; i < lang.length; i++) {
    for (let j = 0; j < componments.length; j++) {  
      stat(src + lang[i] +'/' + componments[j] +'.md', function(err,st){
        if(err){
          return;
        }
        if (st.isFile()){
          fs.readFile(src + lang[i] +'/' + componments[j] +'.md', 'utf-8', function(err,data){
            if (err) {
              console.log('readFile err', err)
            } else {
              console.log(data)
              fs.writeFile(dst + componments[j] + '/doc/index.' + lang[i] + '.md',data,function(err){
                console.log(err)
              })
            }
          })
          // console.log('file', st.isFile() , lang[i])
        }
      })
    }
  }
  
}

copy(srcPath, dstPath)

var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/api', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({data:"ok"})
});

router.get('/img',function(req,res,next){
  console.log(req.query)
  var picPtch = path.resolve(__dirname,`../public/images/map/${req.query.z}/${req.query.x}/${req.query.y}.png`)

  res.sendFile(picPtch, function(err){
    console.log('err', err)
  })
});

router.get('/sockjs-node/info',function(req,res,next){
  res.json({data:"ok"});
})

router.get('/v1/captcha',function(req,res,next){
  res.json({data:"ok1"});
})

router.get('/api/v1/captcha',function(req,res,next){
  res.json({data:"ok11"});
})

router.get('/api/v1/sys/dicts',function(req,res,next){
  var resp = [{"id":2,"dictName":"机构类型","dictCode":"group_type","description":"机构的类型，中心，银行，开发商，运营等1","items":[{"id":"4","dictId":2,"itemKey":"1","itemValue":"中心机构","sortOrder":1,"status":"1","description":null},{"id":"5","dictId":2,"itemKey":"2","itemValue":"银行","sortOrder":2,"status":"1","description":null},{"id":"6","dictId":2,"itemKey":"3","itemValue":"开发商","sortOrder":3,"status":"1","description":null},{"id":"7","dictId":2,"itemKey":"4","itemValue":"运营","sortOrder":4,"status":"1","description":null}]},{"id":3,"dictName":"贷款类型","dictCode":"ln_type","description":"贷款类型","items":[{"id":"8","dictId":3,"itemKey":"01","itemValue":"公积金贷款","sortOrder":1,"status":"1","description":null},{"id":"9","dictId":3,"itemKey":"02","itemValue":"组合贷款","sortOrder":2,"status":"1","description":null}]},{"id":4,"dictName":"房屋类型","dictCode":"house_property","description":"房屋性质","items":[{"id":"10","dictId":4,"itemKey":"01","itemValue":"商品房","sortOrder":1,"status":"1","description":null},{"id":"11","dictId":4,"itemKey":"11","itemValue":"二手房","sortOrder":2,"status":"1","description":null}]},{"id":5,"dictName":"申请状态","dictCode":"apply_status","description":"申请状态","items":[{"id":"12","dictId":5,"itemKey":"01","itemValue":"保存","sortOrder":1,"status":"1","description":null},{"id":"13","dictId":5,"itemKey":"02","itemValue":"本人已签署","sortOrder":2,"status":"1","description":null},{"id":"14","dictId":5,"itemKey":"03","itemValue":"关系人签署完成","sortOrder":3,"status":"1","description":null},{"id":"15","dictId":5,"itemKey":"11","itemValue":"已受理（审批中）","sortOrder":4,"status":"1","description":null},{"id":"16","dictId":5,"itemKey":"12","itemValue":"审批通过（待预约面签）","sortOrder":5,"status":"1","description":null},{"id":"17","dictId":5,"itemKey":"13","itemValue":"审批不通过","sortOrder":6,"status":"1","description":null},{"id":"18","dictId":5,"itemKey":"21","itemValue":"已预约面签","sortOrder":7,"status":"1","description":null},{"id":"19","dictId":5,"itemKey":"22","itemValue":"已发起视频","sortOrder":8,"status":"1","description":null},{"id":"20","dictId":5,"itemKey":"23","itemValue":"借款人已签署","sortOrder":9,"status":"1","description":null},{"id":"21","dictId":5,"itemKey":"24","itemValue":"开发商已签署","sortOrder":10,"status":"1","description":null},{"id":"22","dictId":5,"itemKey":"25","itemValue":"银行已签署","sortOrder":11,"status":"1","description":null},{"id":"23","dictId":5,"itemKey":"26","itemValue":"中心已签署","sortOrder":12,"status":"1","description":null},{"id":"24","dictId":5,"itemKey":"27","itemValue":"面签中断","sortOrder":13,"status":"1","description":null},{"id":"25","dictId":5,"itemKey":"28","itemValue":"签署完成","sortOrder":14,"status":"1","description":null},{"id":"26","dictId":5,"itemKey":"91","itemValue":"作废","sortOrder":15,"status":"1","description":null},{"id":"99","dictId":5,"itemKey":"97","itemValue":"已进入线下面签","sortOrder":17,"status":"1","description":null}]},{"id":6,"dictName":"删除标志","dictCode":"deleted","description":"删除标志","items":[{"id":"27","dictId":6,"itemKey":"0","itemValue":"未删除","sortOrder":1,"status":"1","description":null},{"id":"28","dictId":6,"itemKey":"1","itemValue":"删除","sortOrder":2,"status":"1","description":null}]},{"id":7,"dictName":"状态","dictCode":"status","description":"状态","items":[{"id":"29","dictId":7,"itemKey":"0","itemValue":"正常","sortOrder":1,"status":"1","description":null},{"id":"30","dictId":7,"itemKey":"1","itemValue":"失效","sortOrder":2,"status":"1","description":null}]},{"id":8,"dictName":"文件类型","dictCode":"file_type","description":"文件类型","items":[{"id":"31","dictId":8,"itemKey":"1","itemValue":"图片","sortOrder":1,"status":"1","description":null},{"id":"32","dictId":8,"itemKey":"2","itemValue":"PDF","sortOrder":2,"status":"1","description":null}]},{"id":9,"dictName":"菜单类型","dictCode":"menu_type","description":"菜单类型","items":[{"id":"33","dictId":9,"itemKey":"1","itemValue":"菜单","sortOrder":1,"status":"1","description":null},{"id":"34","dictId":9,"itemKey":"2","itemValue":"按钮","sortOrder":2,"status":"1","description":null}]},{"id":10,"dictName":"婚姻状况","dictCode":"marriage","description":"婚姻状况","items":[{"id":"40","dictId":10,"itemKey":"10","itemValue":"未婚","sortOrder":1,"status":"1","description":null},{"id":"41","dictId":10,"itemKey":"20","itemValue":"已婚","sortOrder":2,"status":"1","description":null},{"id":"42","dictId":10,"itemKey":"30","itemValue":"丧偶","sortOrder":3,"status":"1","description":null},{"id":"43","dictId":10,"itemKey":"40","itemValue":"离异","sortOrder":4,"status":"1","description":null},{"id":"79","dictId":10,"itemKey":"99","itemValue":"其他","sortOrder":5,"status":"1","description":null}]},{"id":11,"dictName":"证件类型","dictCode":"card_type","description":"证件类型","items":[{"id":"44","dictId":11,"itemKey":"01","itemValue":"身份证","sortOrder":1,"status":"1","description":null},{"id":"45","dictId":11,"itemKey":"02","itemValue":"军官证","sortOrder":2,"status":"1","description":null},{"id":"46","dictId":11,"itemKey":"03","itemValue":"护照","sortOrder":3,"status":"1","description":null},{"id":"47","dictId":11,"itemKey":"04","itemValue":"外国人永久居住证","sortOrder":4,"status":"1","description":null},{"id":"48","dictId":11,"itemKey":"99","itemValue":"其他","sortOrder":5,"status":"1","description":null}]},{"id":12,"dictName":"借款人类型","dictCode":"borrower_type","description":"借款人类型","items":[{"id":"49","dictId":12,"itemKey":"0","itemValue":"借款人","sortOrder":1,"status":"1","description":null},{"id":"50","dictId":12,"itemKey":"1","itemValue":"共同借款人","sortOrder":2,"status":"1","description":null}]},{"id":13,"dictName":"性别","dictCode":"sex","description":"性别","items":[{"id":"51","dictId":13,"itemKey":"1","itemValue":"男性","sortOrder":1,"status":"1","description":null},{"id":"52","dictId":13,"itemKey":"2","itemValue":"女性","sortOrder":2,"status":"1","description":null}]},{"id":14,"dictName":"参贷关系","dictCode":"ln_relaship","description":"参贷关系","items":[{"id":"53","dictId":14,"itemKey":"0","itemValue":"本人","sortOrder":1,"status":"1","description":null},{"id":"54","dictId":14,"itemKey":"1","itemValue":"夫妻","sortOrder":2,"status":"1","description":null},{"id":"55","dictId":14,"itemKey":"2","itemValue":"父母","sortOrder":3,"status":"1","description":null},{"id":"56","dictId":14,"itemKey":"3","itemValue":"子女","sortOrder":4,"status":"1","description":null},{"id":"57","dictId":14,"itemKey":"9","itemValue":"其他","sortOrder":5,"status":"1","description":null}]},{"id":15,"dictName":"是否","dictCode":"yes_no","description":"是否","items":[{"id":"58","dictId":15,"itemKey":"0","itemValue":"否","sortOrder":1,"status":"1","description":null},{"id":"59","dictId":15,"itemKey":"1","itemValue":"是","sortOrder":2,"status":"1","description":null}]},{"id":16,"dictName":"还款方式","dictCode":"repay_mode","description":"还款方式","items":[{"id":"60","dictId":16,"itemKey":"01","itemValue":"等额本息","sortOrder":1,"status":"1","description":null},{"id":"61","dictId":16,"itemKey":"02","itemValue":"等额本金","sortOrder":2,"status":"1","description":null}]},{"id":20,"dictName":"高层次人才","dictCode":"imptalent_type","description":"高层次人才类型","items":[{"id":"70","dictId":20,"itemKey":"1","itemValue":"是","sortOrder":1,"status":"1","description":null},{"id":"71","dictId":20,"itemKey":"2","itemValue":"是","sortOrder":2,"status":"1","description":null},{"id":"72","dictId":20,"itemKey":"3","itemValue":"是","sortOrder":3,"status":"1","description":null},{"id":"77","dictId":20,"itemKey":"0","itemValue":"否","sortOrder":4,"status":"1","description":null}]},{"id":21,"dictName":"职务退休年龄","dictCode":"retirementAge","description":"职务退休年龄","items":[{"id":"73","dictId":21,"itemKey":"219A","itemValue":"60","sortOrder":1,"status":"1","description":null},{"id":"74","dictId":21,"itemKey":"220A","itemValue":"55","sortOrder":2,"status":"1","description":null},{"id":"75","dictId":21,"itemKey":"221A","itemValue":"50","sortOrder":3,"status":"1","description":null},{"id":"76","dictId":21,"itemKey":"999A","itemValue":"50","sortOrder":4,"status":"1","description":null}]},{"id":30,"dictName":"还款人类型","dictCode":"repay_person_type","description":"还款人类型","items":[{"id":"100","dictId":30,"itemKey":"0","itemValue":"本人","sortOrder":1,"status":"1","description":null},{"id":"101","dictId":30,"itemKey":"1","itemValue":"配偶","sortOrder":2,"status":"1","description":null},{"id":"102","dictId":30,"itemKey":"2","itemValue":"父母","sortOrder":3,"status":"1","description":null},{"id":"103","dictId":30,"itemKey":"3","itemValue":"子女","sortOrder":4,"status":"1","description":null},{"id":"104","dictId":30,"itemKey":"4","itemValue":"其他","sortOrder":5,"status":"1","description":null}]},{"id":33,"dictName":"测试字典","dictCode":"test_a_112","description":"测试用的","items":[{"id":"d1fe7eecb7dc58f896c10349efce6403","dictId":33,"itemKey":"test_1_2","itemValue":"测试1","sortOrder":1,"status":"1","description":"测试的"}]}]
  res.json({resp: resp});
})


router.get('/es/esBusiDefine/query',function(req,res,next){
  var data = {
    records: [
      {
        busiDefId: 1,
        busiDefName: '业务名称',
        isSignMerge: '是否合并签署',
        validPeriod: 2,
        busiSignInfo: '签署场景描述',
        remark: '备注',
        useFlag: '启用状态'
      }
    ],
    totalRows: 110,
    totalPage: 11,
    page: 1,
    size: 10
  }
  res.json(data)
})

router.post('/api/es/esBusiDefine/save', function(req, res, next) {
  data = {}
  res.json(data);
})

router.put('/api/es/esBusiDefine/edit/:id', function(req, res, next) {
  data = {}
  res.json(data);
})

router.delete('/api/es/esBusiDefine/delete/:id', function(req, res, next) {
  var data = {}
  res.json(data)
})

module.exports = router;

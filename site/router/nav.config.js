// import doc from '../pages/doc/doc-router'

var nav = {
  "zh": [
    {
      "name": "首页",
      "path": "/home"
    },
    {
      "name": "文档",
      "path": "/doc",
      "children": doc
    },
    {
      "name": "材料",
      "path": "/material"
    }
  ],
  "es": [
    {
      "name": "home",
      "path": "/home"
    },
    {
      "name": "doc",
      "path": "/doc"
    },
    {
      "name": "material",
      "path": "/material"
    }
  ]
}
export default nav

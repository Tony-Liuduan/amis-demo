export const schema = {
  "type": "page",
  "title": "页面标题",
  "subTitle": "副标题",


  "body": {
    "type": "form",
    "title": "用户登录",
    "api": "/api/mock2/form/saveForm",

    "controls": [

      {
        "type": "text",
        "name": "username",
        "label": "用户名"
      },
      {
        "type": "password",
        "label": "内容",
        "name": "content",
        "required": true
      },

    ]


  }


};
export const schema = {
  "type": "page",
  "title": "页面标题",
  "subTitle": "副标题",


  "body": {
    "type": "form",
    "title": "用户登录",


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
      // {
      //   "type": "button",
      //   "actionType": "ajax",
      //   "label": "提交",
      //   "confirmText": "您确认要删除?",
      //   "api": ""
      // }

    ]


  }


};
# Q & A
使用style-loader css-loader处理.css文件时，config配置正常，依赖安装正常，依然会报 `Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type`

依赖如下：
```
"css-loader": "^1.0.0",
"less-loader": "^4.1.0",
"style-loader": "^0.21.0",
```
原因是webpack.config.js的导出module.exports少了个s🤣

---

在不配置字体用的`file-loader`的情况下，导入`iconfont.svg`，执行webpack,不会报错，然引入.ttf,.woff,.eot都会报错。

svg作为一个单独的资源被打包，和bundle.js分开,如下
```
                               Asset      Size  Chunks             Chunk Names
de0383d74c6892f036e49abef74e5d02.svg  5.59 KiB          [emitted]
                           bundle.js  70.6 KiB       0  [emitted]  app
```

 ---

执行webpack,对于文件的更新不敏感
-----> clean-webpack-plugin

 ---

## 未完成任务
- [ ] 管理输出-Manifest
# Usage

```
npm i
npm run dev
npm run build
```

# babel如何配置？
最好是查看babel英文官网查看最新配置，中文翻译的文档有不同步的情况，以至于在6.x和7.x之间混乱了很久。

1. 安装最新7.x的`babel-core`，和对应的`babel-loader`
```
npm install --save-dev babel-loader @babel/core
```

2. 在`webpack.common.js`文件中配置babel-loader
```
module:{
    rules:[
        {
            test:/\.js$/，
            exclude:/node_modules/,
            use:{
                loader:'babel-loader'
            }
        }
    ]
}
```
3. 在`.eslintrc`文件中配置一些插件，比如用于转换es6的`preset-env`
```
{
    "presets":["@babel/preset-env",
    {
        targets：{
            "chrome": "58",
            "ie": "11"
    }
    }],
    "plugins": [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties"
  ]
}
```
安装`preset-env`
```
npm install --save-dev @babel/preset-env
```
安装 `@babel/plugin-syntax-dynamic-import`
```
npm install --save-dev @babel/plugin-syntax-dynamic-import
```
安装`@babel/preset-react`

```
npm install --save-dev @babel/preset-react
```
安装`@babel/polyfill`
```
npm install --save @babel/polyfill
```
> 注意引入方式`import '@babel/polyfill'`

为了支持`classProperties`

```
state={
    current : 0
}
```
安装`@babel/plugin-proposal-class-properties`

```
npm install --save-dev @babel/plugin-proposal-class-properties
```
并配置好.babelrc
至此，程序不再报错，支持jsx，import，类。
但是我们引入的antd，没有样式。

# antd配置

```
npm install babel-plugin-import --save-dev
```
然后配置.babelrc

```
"plugins":[["import",{
    "libraryName":"antd",
    "style":true
}]]
```
至此，antd样式正确显示出来，可以正常使用。
至此，已实现

```
支持less
开启source-map
使用webpack-dev-server, 实现了实时重新加载（live reload）
HMR
Babel编译
dev和pro分开打包
```

# babel的几个文件的作用，如何搭配使用？编译出来的代码浏览器支持？自己编写库的话，如何编译？如何发布？
# 请求代理如何实现？
# 如何规划npm run build生成的文件目录？




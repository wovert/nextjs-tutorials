# next.js

## What next.js

> 服务器端渲染框架

## next.js Features

- 热代码更新
- 自动路由
- 单文件组件
- 服务端渲染
- 生态系统兼容：next.js与 js, node, react 生态系统协作良好
- 自动代码分割，预读取，动态组件，静态输出

## 项目创建

```sh
# npm init -y
# yarn add next react react-dom
# vim package.json
  "scripts": {
    "dev": "next"
  }
# mkdir pages
# vim pages/index.js
```

## 支持 css/sass/less/stylus

- @zeit/next-css
- @zeit/next-sass node-sass
- @zeit/next-less
- @zeit/next-stylus

## 获取数据以及生命周期

- `getInitalProps` 在初始化组件 `props` 属性时被调用，只在服务器端运行，没有跨域的限制
- 不能用于子组件上，只能用于页面组件上
- 参数中的属性
  - pathname
  - query
  - asPath
  - req
  - res

## 路由的配置

- 基本路由功能：next 默认是按照文件结构进行页面跳转
  - Link 跳转
  - 编程式跳转
  - 参数传递
- 路由遮盖
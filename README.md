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

### Link 跳转

```js
import Link from 'next/link'

<Link href="/">主页</Link> |
<Link href="/list">列表</Link> |
<Link href="/nestStyle">内嵌样式-sample</Link>
```

### 编程式跳转

```js
<li onClick={() => Router.push('/detail?id=' + (index + 1))}>{item}</li>
```

### 参数传递

```js
<li key={index} onClick={() => Router.push({
  pathname: '/detail',
  query: {
    id: index+1
  }
})}>{item}</li>
```

### 路由遮盖

```js
<Link href="/list" as="l"><a>列表</a></Link> |
```

## 路由预加载和路由守卫

### 路由预加载

- 预加载：今日页面之前，先把目标之中的内容先加载进来，这样跳转目标页面的时候非常快。
- 懒加载：如果跳转页面特别多，浪费流浪。先加载部分数据，之后跳转之后动态加载更多的内容。

- 方法1：`<Link>`标签添加 `prefetch` 属性。此属性上线之后才会有效果

```js
<Link href="/" prefetch><a>主页</a></Link> |
<Link href="/list" as="l" prefetch><a>列表</a></Link> |
<Link href="/nestStyle" as="n" prefetch><a>内嵌样式-sample</a></Link>
```

- 方法2：使用 `withRouter` 高阶组件，在组件中使用 `router.prefetch('/dynamic')`

```js
import withRouter from 'next/router'
export default withRouter(({children, router}) => (
  <div>
    <Head>
      <title>共同头部</title>
    </Head>
    <div>
      <Link href="/"><a>主页</a></Link> |
      {router.prefetch('/')}
      <Link href="/list" as="l"><a>列表</a></Link> |
      <Link href="/nestStyle" as="n"><a>内嵌样式-sample</a></Link>
    </div>
    {children}
    <footer>
      <p>版权所有，未经允许可以分享</p>
    </footer>
  </div>
))
```

### 路由守卫

> 路由权限

- routerChangeStat(url) 路由跳转开始
- routerChangeComplete(url) 路由跳转完成
- routeChangeError(err, url) 路由跳转失败
- beforeHistoryChange(url) 浏览器历史改变

## 在 next.js 中使用 redux

```sh
# npm i -g create-next-app
# create-next-app --example with-redux with-redux-app

# yarn create next-app --example with-redux with-redux-app

# npx create-next-app --example with-redux with-redux-app
```
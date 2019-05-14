import Head from 'next/head'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'

Router.events.on('routeChangeStart', (url) => {
  console.log(url)
  if (url === '/list' || url === '/l') {
    location.href = '/nopermission'
  }
})

export default ({children}) => (
  <div>
    <Head>
      <title>共同头部</title>
    </Head>
    <div>
      <Link href="/"><a>主页</a></Link> |
      <Link href="/list" as="l"><a>列表</a></Link> |
      <Link href="/nestStyle" as="n"><a>内嵌样式-sample</a></Link>
    </div>
    {children}
    <footer>
      <p>版权所有，未经允许可以分享</p>
    </footer>
  </div>

)
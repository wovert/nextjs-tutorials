import Head from 'next/head'

export default ({children}) => (
  <div>
    <Head>
      <title>共同头部</title>
    </Head>
    {children}
    <footer>
      <p>版权所有，未经允许可以分享</p>
    </footer>
  </div>
)
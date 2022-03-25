// 这是一个使用构建项目的简单节点服务器。

const path = require('path')
const express = require('express')


// 静态路由列表
const { ssr } = require(`./dist/server/package.json`)

// 预装资产需要清单
const manifest = require(`./dist/client/ssr-manifest.json`)

// 服务端
const { default: renderPage } = require(`./dist/server`)

// const api = require('./api')

const server = express()

// 为每个静态路由提供服务
for (const asset of ssr.assets || []) {
  server.use(
    '/' + asset,
    express.static(path.join(__dirname, `./dist/client/` + asset))
  )
}

// Custom API to get data for each page
// See src/main.js to see how this is called
// api.forEach(({ route, handler, method = 'get' }) =>
//   server[method](route, handler)
// )

// 其他请求
server.get('*', async (request, response) => {
  const url =
    request.protocol + '://' + request.get('host') + request.originalUrl

  const { html, status, statusText, headers } = await renderPage(url, {
    manifest,
    preload: true,
    // Anything passed here will be available in the main hook
    request,
    response,
    // initialState: { ... } // <- This would also be available
  })

  response.writeHead(status || 200, statusText || headers, headers)
  response.end(html)
})

const port = 20000
console.log(`Server started: http://localhost:${port}`)
server.listen(port)

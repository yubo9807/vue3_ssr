# 使用
## 安装
```shell
yarn
```
## 运行
```js
yarn dev  //开发模式运行
yarn build //打包

```

# 目录结构
* dist 打包目录
* server.js 打包后的node express 运行脚本【build后使用这个进行部署
> 剩余的目录结构内容与 vue 没什莫大的区别
## 使用插件
```json
 "dependencies": {
    "@vue/server-renderer": "^3.2.6",
    "@vueuse/head": "^0.6.0",
    "express": "^4.17.1",
    "vite-ssr": "^0.13.0",
    "vue": "^3.2.6",
    "vue-router": "4",
    "vuex": "^4.0.2"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^1.6.0",
    "@vue/compiler-sfc": "^3.0.5",
    "vite": "^2.5.1"
  }
```

# 国外大佬 https://github.com/frandiox
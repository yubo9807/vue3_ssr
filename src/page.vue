<script setup>
import { ref } from 'vue'


const count = ref(0)
</script>

<template>

<!-- <h1>{{$store.state.count}}</h1> -->
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/hello">Go to hello</router-link>
    ================
    <router-link to="/about">Go to about</router-link>
     <router-view></router-view>
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

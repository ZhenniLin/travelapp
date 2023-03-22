<!-- 整个应用的根组件 -->

<template>
  <div id="app">
    <!-- router-view 显示的是当前路由地址所对应的内容 -->
    <!-- 显示的就是 hello world 小组件 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>

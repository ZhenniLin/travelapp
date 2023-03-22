<template>
  <div>
  <home-header></home-header>
  </div>
</template>

<script>

import HomeHeader from './components/Header'

export default {
  name: 'Home',
  components: {
    // HomeHeader: HomeHeader
    // ES6里对象和键值都一样的话
    HomeHeader
  }
}
</script>

<style>
.home {
  font-size: 50px;
}
</style>

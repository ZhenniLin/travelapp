<template>
  <div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'

export default {
  name: 'Home',
  components: {
    // HomeHeader: HomeHeader
    // ES6里对象和键值都一样的话
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>
.home {
  font-size: 50px;
}
</style>

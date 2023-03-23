<template>
  <div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'

export default {
  name: 'Home',
  components: {
    // HomeHeader: HomeHeader
    // ES6里对象和键值都一样的话
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>
.home {
  font-size: 50px;
}
</style>

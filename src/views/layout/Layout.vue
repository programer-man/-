<template>
  <app-topnav/>
  <header>头部</header>
  <main>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
export default {
  name: 'xtx-layout',
  components: {
    AppTopnav
  }
}
</script>

<style scoped lang="less"></style>

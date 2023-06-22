<template>
  <app-topnav/>
  <app-header/>
  <main>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
export default {
  name: 'xtx-layout',
  components: {
    AppTopnav,
    AppHeader
  }
}
</script>

<style scoped lang="less"></style>

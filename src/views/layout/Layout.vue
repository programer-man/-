<template>
  <app-topnav />
  <app-header />
  <app-header-sticky></app-header-sticky>
  <main class="app-body">
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </main>
  <app-footer />
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>

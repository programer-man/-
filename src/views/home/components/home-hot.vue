<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <div style="position: relative; height: 426px" ref="target">
      <Transition name="fade">
        <ul ref="pannel" class="goods-list" v-if="goods.length">
          <li v-for="item in goods" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
              <p class="name">{{ item.title }}</p>
              <p class="desc">{{ item.alt }}</p>
            </RouterLink>
          </li>
        </ul>
        <HomeSkeleton v-else></HomeSkeleton>
      </Transition>
    </div>
  </HomePanel>
</template>

<script>
import { findHot } from '@/api/home'
import HomePanel from './home-pannel.vue'
import HomeSkeleton from './home-skeleton.vue'
import { useLazyData } from '@/hooks'
export default {
  name: 'HomeNew',
  components: { HomePanel, HomeSkeleton },
  setup() {
    const { target, result } = useLazyData(findHot)
    return { goods: result, target }
  }
}
</script>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>

// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法
// 插件
// vue2 插件写法要素： 导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3 : 导出一个对象，有install函数，默认传入了app应用实例,app基础之上扩展

import XtxSkeleton from '../library/xtx-skeleton.vue'
import XtxCarousel from '../library/xtx-carousel.vue'

export default {
  install(app) {
    // 在app上进行扩展，app提供component directive函数
    // 如果要挂在原型 app.config.globalProperties方式
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
  }
}

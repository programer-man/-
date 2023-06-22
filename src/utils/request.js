import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 1. 创建一个新的axios实例
// 2. 请求拦截器， 如果有token就进行头部携带
// 3. 响应拦截器： 1. 剥离无效数据 2. 处理token失效
// 4. 导出一个函数，调用当前的axios实例发请求，返回值promise

// 导出基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  // axios的一些配置, baseURL, timeout
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    //  拦截业务逻辑
    // 进行请求配置的修改
    // 如果本地有token就在头部携带
    // 1. 获取用户信息对象
    const { profile } = store.state.user
    // 2. 判断是否有token
    if (profile.token) {
      // 3. 给请求头添加token
      config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    // 401 状态码， 进入该函数
    if (err.response && err.response.status === 401) {
      // 1. 清空无效用户信息
      // 2. 跳转到登录页
      // 3. 跳转需要传参 （当前路由地址）给登录页码
      store.commit('user/setUser', {})
      // 当前路由地址
      // 组件里头： "/user?a=10" $route.path === /user $route.fullPath === /user?a=10
      // js模块中： router.currentRoute.value.fullPath 就是当前路由地址, router.currentRoute是ref响应式数据
      // encodeURIComponent 转换uri编码， 防止解析地址出问题
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
      router.push('/login?redirectUrl=', fullPath)
    }
    return Promise.reject(err)
  }
)

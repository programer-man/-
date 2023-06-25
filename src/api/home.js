import request from '@/utils/request'
// 请求左侧导航栏 品牌项 的弹出数据
export const findBrand = (limit) => {
  return request('/home/brand', 'get', { limit })
}

// 获取广告图
export const findBanner = () => {
  return request('/home/banner', 'get')
}

// 获取新鲜好物模块数据
export const findNew = () => {
  return request('/home/new', 'get')
}

// 获取人气推荐模块的数据
export const findHot = () => {
  return request('/home/hot', 'get')
}

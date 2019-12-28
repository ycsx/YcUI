// 引入组件
import YcExtend from './yc-extend'
import './yc-extend.css'
YcExtend.install = Vue => Vue.component(YcExtend.name, YcExtend);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(YcExtend);
}

export default YcExtend

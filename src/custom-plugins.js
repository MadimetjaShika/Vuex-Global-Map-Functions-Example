/* eslint-disable */
import store from '@/store/index';

export default {
  store,
  install(Vue, options) {
    Vue.prototype.$store = store;
  },
}

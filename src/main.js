// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import customPlugins from '@/custom-plugins';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(customPlugins);

const mixin = {
  computed: {
    ...mapGetters([
      'activeComponents',
      'deadComponents',
    ]),
  },
  methods: {
    ...mapActions([
      'activateComponent',
      'deactivateComponent',
    ]),
  },
};

Vue.mixin(mixin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

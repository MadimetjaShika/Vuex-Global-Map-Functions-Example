<template>
  <div>
    <h4>Report Status:</h4>
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="currentView"></component>
    </transition>
    <div>
      <h5>Active Team Members:</h5>{{ activeComponents }}
    </div>
    <div>
      <h5>Dormant Team Members:</h5>{{ deadComponents }}
    </div>
  </div>
</template>

<script>
import Agent from '@/components/Agent';
import Colonel from '@/components/Colonel';
import General from '@/components/General';
import Lieutenant from '@/components/Lieutenant';
import Sergeant from '@/components/Sergeant';

export default {
  name: 'home',
  data() {
    return {
      currentView: 'agent',
      components: ['agent', 'colonel', 'general', 'lieutenant', 'sergeant'],
      componentsIndex: 0,
    };
  },
  components: {
    Agent,
    Colonel,
    General,
    Lieutenant,
    Sergeant,
  },
  mounted() {
    setInterval(() => {
      if (this.componentsIndex >= this.components.length) {
        this.currentView = this.components[0];
        this.componentsIndex = 1;
      } else {
        this.currentView = this.components[this.componentsIndex];
        this.componentsIndex += 1;
      }
    }, 1500);
  },
};
</script>

<style scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

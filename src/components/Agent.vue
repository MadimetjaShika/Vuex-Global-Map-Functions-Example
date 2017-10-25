<template>
  <div>
    <p>Agent Ready Ready For Mission!</p>
  </div>
</template>

<script>

export default {
  name: 'agent',
  mounted() {
    this.activateComponent(this.$options.name);
  },
  beforeDestroy() {
    this.deactivateComponent(this.$options.name);
  },
};
</script>

<style scoped>
</style>

<template>
  <div>
    <p>General Smith Ready!</p>
  </div>
</template>

<script>

export default {
  name: 'general',
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

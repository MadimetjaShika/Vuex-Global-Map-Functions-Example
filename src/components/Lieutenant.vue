<template>
  <div>
    <p>Lieutenant X Sir!</p>
  </div>
</template>

<script>

export default {
  name: 'lieutenant',
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

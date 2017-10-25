<template>
  <div>
    <p>Sergeant Doing The Most!</p>
  </div>
</template>

<script>

export default {
  name: 'sergeant',
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

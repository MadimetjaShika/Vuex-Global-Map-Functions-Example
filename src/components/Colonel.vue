<template>
  <div>
    <p>Colonel Sanders Reporting For Duty!</p>
  </div>
</template>

<script>

export default {
  name: 'colonel',
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

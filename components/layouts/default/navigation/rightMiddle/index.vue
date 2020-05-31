<template>
<div class="layouts_default_navigation_right_middle_area" v-if="view">
  <div>rightmiddle</div>
</div>
</template>

<script>
export default {
  props: ['view']
}
</script>

<style lang="scss">
.layouts_default_navigation_right_middle_area {
  position: fixed;
  right: calc(2vh + 2vw);
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

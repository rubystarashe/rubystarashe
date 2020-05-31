<template>
<div class="layouts_default_navigation_right_top_area" v-if="view">
  <v-navigation-element>Contact</v-navigation-element>
</div>
</template>

<script>
export default {
  props: ['view']
}
</script>

<style lang="scss">
.layouts_default_navigation_right_top_area {
  position: fixed;
  right: calc(2vh + 2vw);
  top: calc(1vh + 1vw);
}
</style>

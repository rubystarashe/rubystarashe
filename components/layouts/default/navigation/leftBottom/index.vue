<template>
<div class="layouts_default_navigation_left_bottom_area" v-if="view">
  <v-navigation-element>Contact</v-navigation-element>
</div>
</template>

<script>
export default {
  props: ['view']
}
</script>

<style lang="scss">
.layouts_default_navigation_left_bottom_area {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>

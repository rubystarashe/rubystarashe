<template>
<div class="layouts_default_navigation_right_top_area" v-if="view">
  <v-navigation-element>All</v-navigation-element>
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
  right: 0;
  top: 0;
}
</style>

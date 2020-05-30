<template>
<div class="layouts_default_navigation_left_top_area"
  :style="{
    left: view ? 'calc(2vh + 2vw)' : '15%',
    top: view ? 'calc(1vh + 1vw)' : '25%',
    'font-size': view ? null : 'calc(5vh + 5vw)'
  }"
>
  <v-navigation-element :lock="!view">
    <span style="float: left">Rubystar</span>
    <span style="float: left">Ashe</span>
  </v-navigation-element>
</div>
</template>

<script>
export default {
  props: ['view']
}
</script>

<style lang="scss">
.layouts_default_navigation_left_top_area {
  position: fixed;
  left: calc(2vh + 2vw);
  top: calc(1vh + 1vw);
  transform: translate(0%, 0%);
  transition-property: left, top, transform, font-size;
  transition-duration: .3s;
  max-width: 70vw;
}
</style>

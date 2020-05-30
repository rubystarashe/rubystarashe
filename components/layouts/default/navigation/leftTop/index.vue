<template>
<div class="layouts_default_navigation_left_top_area"
  :style="{
    left: view ? '0%' : '50%',
    top: view ? '0%' : '50%',
    transform: view ? 'translate(0%, 0%)' : 'translate(-65%, -70%)',
    'font-size': view ? 'calc(.7vh + .7vw)' : 'calc(5vh + 5vw)'
  }"
>
  <v-navigation-element :lock="!view">RubystarAshe</v-navigation-element>
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
  left: 0%;
  top: 0%;
  transform: translate(0%, 0%);
  transition-property: left, top, transform, font-size;
  transition-duration: .3s;
}
</style>

<template>
<div class="layout_area">
  <v-scroll-area/>
  <v-navigation/>
  <nuxt/>
  <v-title-menu/>
  <v-progress/>
</div>
</template>

<script>
import vScrollArea from '~/components/layouts/default/scrollArea'
import vProgress from '~/components/layouts/default/progress'
import vNavigation from '~/components/layouts/default/navigation'
import vTitleMenu from '~/components/layouts/default/titleMenu'

export default {
  components: {
    vScrollArea,
    vProgress,
    vNavigation,
    vTitleMenu
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  font-size: calc(.8vh + .8vw);
}

.layout_area {
  background: #EFEFEF;
}
</style>
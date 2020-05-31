<template>
<div class="layout_area">
  <v-scroll-area/>
  <v-navigation/>
  <nuxt/>
  <v-progress/>
</div>
</template>

<script>
import vScrollArea from '~/components/layouts/default/scrollArea'
import vProgress from '~/components/layouts/default/progress'
import vNavigation from '~/components/layouts/default/navigation'

export default {
  components: {
    vScrollArea,
    vProgress,
    vNavigation
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  font-size: calc(.8vh + .8vw);
  background: #EFEFEF;
}

.layout_area {
  background: #EFEFEF;
}
</style>
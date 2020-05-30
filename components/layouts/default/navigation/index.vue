<template>
<div class="layouts_default_navigation_area">
  <v-left-bottom :view="!loading"/>
  <v-left-top :view="!loading"/>
  <v-right-middle :view="!loading"/>
  <v-right-bottom :view="!loading"/>
  <v-right-top :view="!loading"/>
</div>
</template>

<script>
import vLeftBottom from './leftBottom'
import vLeftTop from './leftTop'
import vRightMiddle from './rightMiddle'
import vRightBottom from './rightBottom'
import vRightTop from './rightTop'

export default {
  components: {
    vLeftBottom,
    vLeftTop,
    vRightMiddle,
    vRightBottom,
    vRightTop
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    this.$EventBus.$on('navigation_loading', v => this.loading = v)
  }
}
</script>

<style lang="scss">
.layouts_default_navigation_area {
  position: fixed;
  z-index: 9;
  color: white;
  mix-blend-mode: exclusion;
}
</style>
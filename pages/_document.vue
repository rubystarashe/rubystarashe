<template>
<div class="document_area" :style="{ transform: `translateY(${0 - documentPosition}px)` }">
{{route}}
</div>
</template>

<script>
export default {
  computed: {
    route () {
      return this.$route.params.document || 'titleMenu'
    },
    scrollPosition_lerp () {
      return this.$store.getters['interface/scrollPosition_lerp']
    },
    scrollAcceleration () {
      return this.$store.getters['interface/scrollAcceleration']
    },
    documentPosition () {
      return this.scrollPosition_lerp * this.scrollAcceleration
    }
  },
  mounted () {
    this.$store.commit('loading/preloadList', 'test.gif')
  }
}
</script>

<style lang="scss">
.document_area {
  position: fixed;
  top: 0;
}
</style>

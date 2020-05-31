<template>
<div ref="scrollArea" :style="{ height: `${loading ? 0 : bodyScrollHeight}px` }">
</div>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.getters['interface/loading']
    },
    bodyScrollHeight () {
      return this.$store.getters['interface/bodyScroll']
    },
    scrollPosition () {
      return this.$store.getters['interface/scrollPosition']
    },
    scrollPosition_lerp () {
      return this.$store.getters['interface/scrollPosition_lerp']
    }
  },
  methods: {
    lerp () {
      if (this.scrollPosition_lerp != this.scrollPosition) {
        this.$store.dispatch('interface/set_scrollPosition_lerp', this.$lerp(this.scrollPosition_lerp, this.scrollPosition, 0.1).toFixed(1))
      }
      setTimeout(this.lerp, 1000/144)
    }
  },
  mounted () {
    window.addEventListener('scroll', e => {
      this.$store.commit('interface/scrollPosition', window.scrollY)
    })
    this.lerp()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', () => {}, true)
  }
}
</script>

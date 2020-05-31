<template>
<div class="document_area" :style="{ transform: `translateY(${0 - documentPosition}px)`, opacity: init ? 1 : 0 }">
  <v-title-Menu v-show="route == 'titleMenu'" ref="titleMenu"/>
</div>
</template>

<script>
import vTitleMenu from '~/components/pages/document/titleMenu'

export default {
  components: {
    vTitleMenu
  },
  computed: {
    init () {
      return this.$store.getters['interface/init']
    },
    loading () {
      return this.$store.getters['interface/loading']
    },
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
    },
    windowHeight () {
      return this.$store.getters['interface/windowHeight']
    }
  },
  methods: {
    setScrollHeight (route = this.route) {
      this.$store.commit('interface/bodyScroll', this.windowHeight + ((this.$refs[route].$el.scrollHeight - this.windowHeight) / this.scrollAcceleration))
    }
  },
  watch: {
    route: {
      handler: function (n, p) {
        this.setScrollHeight(n)
      }
    },
    loading: {
      handler: function (n, p) {
        this.setScrollHeight()
      }
    }
  },
  mounted () {
    this.$store.commit('loading/preloadList', 'test.gif')
    window.addEventListener('resize', e => {
      this.setScrollHeight()
    })
    this.setScrollHeight()
  },
  beforeDestroy () {
    window.removeEventListener('resize', () => {}, true)
  }
}
</script>

<style lang="scss">
.document_area {
  position: fixed;
  top: 0;
}
</style>

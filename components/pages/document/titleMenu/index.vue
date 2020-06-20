<template>
<div class="pages_document_titleMenu_area" :style="{ transform: `translateY(${0 - titlePosition_lerp}px)` }">
  <v-title
    v-for="({ title, description, path }, index) in menu"
    :key="`${index}_${title}`"
    :index="index"
    :title="title"
    :description="description"
    :path="path"
    :focus="index == focus"
    @mouseover.native="focus = index"
    :ref="path"
  />
</div>
</template>

<script>
import vTitle from './title'

export default {
  props: [ 'documentPosition' ],
  components: {
    vTitle
  },
  computed: {
    menu () {
      return this.$store.getters['menu']
    },
    windowHeight () {
      return this.$store.getters['interface/windowHeight']
    },
    scrollPosition () {
      return this.$store.getters['interface/scrollPosition']
    },
    windowHeight () {
      return this.$store.getters['interface/windowHeight']
    },
    scrollAcceleration () {
      return this.$store.getters['interface/scrollAcceleration']
    },
    titlePosition () {
      return this.$store.getters['interface/titlePosition']
    },
    titlePosition_lerp () {
      return this.$store.getters['interface/titlePosition_lerp']
    }
  },
  data () {
    return {
      focus: 0,
      count: 0,
      interval: null,
      titleSpace: 0
    }
  },
  methods: {
    focusOn (focus) {
      if (this.focus == focus) {
        this.count++
        setTimeout(() => this.focusOn(focus), 100)
        if (this.count == 15) {
          this.scrollTo(focus)
        }
        if (this.count > 100) {
          const next = this.menu.length < focus + 1 ? 0 : focus + 1
          this.focus = next
          this.scrollTo(next)
        }
      }
      else this.count = 0
    },
    scrollTo (index) {
      const path = (this.menu[index] || {}).path
      const el = ((this.$refs[path] || {})[0] || {}).$el
      if (el) {
        const top = el.getBoundingClientRect().top
        const height = el.getBoundingClientRect().height
        const distance = top - (this.windowHeight / 2) + (height / 2)
        this.$EventBus.$emit('scrollMove', distance)
      }
    },
    lerp () {
      if (this.titlePosition != this.titlePosition_lerp) {
        this.$store.dispatch('interface/set_titlePosition_lerp', this.$lerp(this.titlePosition_lerp, this.titlePosition, 0.1).toFixed(1))
      }
    }
  },
  mounted () {
    this.interval = setInterval(() => this.lerp(), 1000/60)
    
      const path = this.$route.path
      const element = (((this.$refs[path] || {})[0] || {}).$el || {}).offsetTop
      if (element) this.titleSpace = (element || 0) - (this.windowHeight / 5)
      else this.titleSpace =  0
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  watch: {
    focus: {
      handler: function (n, p) {
        this.count = 0
        this.focusOn(n)
      },
      immediate: true
    },
    scrollPosition: {
      handler: function (n, p) {
        this.count = 0
        this.$store.commit('interface/titlePosition', (parseInt(this.scrollPosition) * this.scrollAcceleration) + parseInt(this.titleSpace))
      },
      immediate: true
    },
    titleSpace: {
      handler: function (n, p) {
        this.$store.commit('interface/titlePosition', (parseInt(this.scrollPosition) * this.scrollAcceleration) + parseInt(this.titleSpace))
      }
    }
  }
}
</script>

<style lang="scss">
.pages_document_titleMenu_area {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(50vh - 5vh - 8vw) 0;
  left: 0;
  right: 0;

  a:link {
    background-color: transparent;
    text-decoration: none;
  }
  a:visited {
    background-color: transparent;
    text-decoration: none;
  }
  a:hover {
    background-color: transparent;
    text-decoration: none;
  }
  a:active {
    background-color: transparent;
    text-decoration: none;
  }
}
</style>
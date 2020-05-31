<template>
<div class="pages_document_titleMenu_area">
  <v-title
    v-for="({ title, description, path }, index) in menu"
    :key="`${index}_${title}`"
    :index="index"
    :title="title"
    :description="description"
    :path="path"
    :focus="index == focus"
    @mouseover.native="focus = index"
    :ref="index"
  />
</div>
</template>

<script>
import vTitle from './title'

export default {
  components: {
    vTitle
  },
  computed: {
    menu () {
      return this.$store.getters['menu']
    },
    windowHeight () {
      return this.$store.getters['interface/windowHeight']
    }
  },
  data () {
    return {
      focus: 0,
      count: 0
    }
  },
  methods: {
    focusOn (focus) {
      if (this.focus == focus) {
        this.count++
        setTimeout(() => this.focusOn(focus), 100)
        if (this.count == 8) {
          const el = ((this.$refs[focus] || {})[0] || {}).$el
          if (el) {
            const top = el.getBoundingClientRect().top
            const height = el.getBoundingClientRect().height
            const distance = top - (this.windowHeight / 2) + (height / 2)
            this.$EventBus.$emit('scrollMove', distance)
          }
        }
      }
      else this.count = 0
    }
  },
  watch: {
    focus: {
      handler: function (n, p) {
        this.count = 0
        this.focusOn(n)
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
.pages_document_titleMenu_area {
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
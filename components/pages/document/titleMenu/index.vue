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
    },
    scrollPosition () {
      return this.$store.getters['interface/scrollPosition']
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
        if (this.count == 20) {
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
    scrollTo (ref) {
      const el = ((this.$refs[ref] || {})[0] || {}).$el
      if (el) {
        const top = el.getBoundingClientRect().top
        const height = el.getBoundingClientRect().height
        const distance = top - (this.windowHeight / 2) + (height / 2)
        this.$EventBus.$emit('scrollMove', distance)
      }
    }
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
      }
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
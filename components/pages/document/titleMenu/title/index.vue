<template>
<nuxt-link :to="path">
<div class="document_titleMenu_title_area" ref="title" :style="{ transform: `scale(${scale})` }">
  <div class="index" v-show="inpage" :style="{ opacity: focus ? 1 : 0.7 }">{{computedIndex}}</div>
  <div class="title"
    :style="{
      color: focus ? 'black' : 'rgba(0, 0, 0, 0)',
      '-webkit-text-stroke': focus ? '1px #EFEFEF' : '1px black'
    }"
  ><span @mouseover="$emit('over')">{{title}}</span></div>
  <div class="description" v-show="inpage" :style="{ opacity: focus ? 1 : 0.7 }">{{description}}</div>
</div>
</nuxt-link>
</template>

<script>
export default {
  props: ['index', 'title', 'description', 'focus', 'path', 'inpage'],
  data () {
    return {
      scale: 1,
      min_scale: 0.7
    }
  },
  computed: {
    computedIndex () {
      return this.index + 1 > 9 ? this.index + 1 : '0' + (this.index + 1)
    },
    titlePosition_lerp () {
      return this.$store.getters['interface/titlePosition_lerp']
    },
    windowHeight () {
      return this.$store.getters['interface/windowHeight']
    }
  },
  methods: {
    scaleChange () {
      const el = this.$refs['title']
      if (el) {
        const top = el.getBoundingClientRect().top
        const height = el.getBoundingClientRect().height
        const position = top - (this.windowHeight / 2) + (height / 2)
        const rate = 1 - (Math.abs(position) / this.windowHeight)
        this.scale = this.min_scale + (1 - this.min_scale) * rate
      }
    }
  },
  watch: {
    titlePosition_lerp: {
      handler: function (n, p) {
        this.scaleChange()
      },
      immediate: true
    }
  },
  mounted () {
    this.scaleChange()
  }
}
</script>

<style lang="scss">
.document_titleMenu_title_area {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: calc(1vh + 5vw) 0;
  padding: 0 calc(2vh + 2vw);
  margin-left: 10%;
  transform-origin: center left;
  .index {
    position: absolute;
    top: 0;
    left: 0;
    font-size: calc(1vh + 1vw);
    color: black;
  }
  .title {
    font-size: calc(5vh + 5vw);
    font-weight: bold;
  }
  .description {
    margin-top: calc(.5vh + .5vw);
    margin-left: calc(.2vh + .2vw);
    font-size: calc(1vh + 1vw);
    color: black;
  }
}
</style>

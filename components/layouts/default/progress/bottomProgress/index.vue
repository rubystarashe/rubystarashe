<template>
<div class="layouts_default_progress_bottom_progress_area">
  <v-progress-guide :progress="progress"/>
  <div class="progress_text">{{progress}} {{scrollProgress}}</div>
  <div class="progress_bar" :style="{ width: `${progress}%`, 'clip-path': `polygon(${scrollProgress}% 0, 100% 0%, 100% 100%, ${scrollProgress}% 100%)` }"/>
</div>
</template>

<script>
import vProgressGuide from './progressGuide'

export default {
  components: {
    vProgressGuide
  },
  computed: {
    scrollProgress () {
      return this.$store.getters['interface/scrollProgress']
    },
    progress () {
      const queue = this.$store.getters['loading/preloadList']
      const loaded = this.$store.getters['loading/loadedList']
      if (!queue.length) return 0
      else return (loaded.length / queue.length).toFixed(1) * 100
    }
  }
}
</script>

<style lang="scss">
.layouts_default_progress_bottom_progress_area {
  position: fixed;
  bottom: 0;
  left: calc(5vh + 5vw);
  right: calc(5vh + 5vw);
  overflow: hidden;
  color: white;
  mix-blend-mode: exclusion;
  .progress_text {
    opacity: 0;
  }
  .progress_bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: calc(.5vh + .5vw);
    background: white;
    transition-property: width, clip-path;
    transition-duration: .5s;
  }
}
</style>

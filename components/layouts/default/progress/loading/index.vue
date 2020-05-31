<template>
<div class="layouts_default_progress_loading_area" :class="`layouts_default_progress_loading_area_${loading ? 'in' : 'out'}`">
  <img v-if="content" :style="{ content: content, opacity: 0 }">
</div>
</template>

<script>
export default {
  computed: {
    preloadList () {
      return this.$store.getters['loading/preloadList']
    },
    loadedList () {
      return this.$store.getters['loading/loadedList']
    },
    content() {
      return this.loadedList.length ? (this.loadedList.length > 1 ? 'url(' + this.loadedList.join(') url(') + ')' : 'url(' + this.loadedList[0] + ')') : ''
    }
  },
  data () {
    return {
      loading: true,
      delay: 700
    }
  },
  methods: {
    loadingSwitch (boolean) {
      this.loading = boolean
      this.$EventBus.$emit('navigation_loading', boolean)
    }
  },
  watch: {
    preloadList: {
      handler: function (n, p) {
        if (n.length) {
          this.loadingSwitch(true)
          this.$store.commit('loading/reset_loadedList')
          setTimeout(() => {
            this.$store.commit('interface/loading', true)
            for(let i = n.length; i > 0; i--) {
              const img = new Image()
              const index = n.length - i
              img.src = n[index]
              img.onload = () => {
                this.$store.commit('loading/loadedList', img.src)
              }
            }
          }, this.delay)
        }
      }
    },
    loadedList: {
      handler: function (n, p) {
        if (n.length && this.preloadList.length == n.length) {
          this.$store.commit('interface/init', true)
          setTimeout(() => {
            this.$store.commit('interface/loading', false)
            this.loadingSwitch(false)
          }, this.delay)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.layouts_default_progress_loading_area {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
}
.layouts_default_progress_loading_area_in {
  animation: loading_in .7s forwards;
}
.layouts_default_progress_loading_area_out {
  animation: loading_out .7s forwards;
}

@keyframes loading_in {
  0% {
    clip-path: polygon(100% -10%, -10% -10%, -10% -10%, -10% -10%, -10% 100%, -10% -10%);
  }
  100% {
    clip-path: polygon(100% 0, 100% 0, 150% 150%, 0 100%, 0 100%, 0 0);
  }
}

@keyframes loading_out {
  0% {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%, 0 100%, 0 0);
  }
  100% {
    clip-path: polygon(100% 0, 0 0, -50% -50%, 0 0, 0 100%, 0 0);
  }
}
</style>

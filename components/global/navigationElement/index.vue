<template>
<div class="navigation_element_area" ref="navigationElement" @mousemove="mousemove" @mouseleave="mouseleave">
  <div class="navigation_element" :style="{ transform: `matrix(1, 0, 0, 1, ${offsetX_Lerp / 2}, ${offsetY_Lerp / 2})` }">
    <slot/>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      offsetX: 0,
      offsetX_Lerp: 0,
      offsetY: 0,
      offsetY_Lerp: 0,
      lerpCheck: false
    }
  },
  methods: {
    mousemove (event) {
      const { offsetWidth, offsetHeight } = this.$refs.navigationElement
      const { offsetX, offsetY } = event
      this.offsetX = offsetX - (offsetWidth / 2)
      this.offsetY = offsetY - (offsetHeight / 2)
      if (!this.lerpCheck) this.lerp()
    },
    mouseleave () {
      this.offsetX = 0
      this.offsetY = 0
      if (!this.lerpCheck) this.lerp()
    },
    lerp () {
      this.offsetX_Lerp = this.$lerp(this.offsetX_Lerp, this.offsetX, 0.2).toFixed(1)
      this.offsetX_Lerp = Math.abs(this.offsetX - this.offsetX_Lerp) < 1 ? this.offsetX : this.offsetX_Lerp
      this.offsetY_Lerp = this.$lerp(this.offsetY_Lerp, this.offsetY, 0.2).toFixed(1)
      this.offsetY_Lerp = Math.abs(this.offsetY - this.offsetY_Lerp) < 1 ? this.offsetY : this.offsetY_Lerp
      if (this.offsetX_Lerp == this.offsetX && this.offsetY_Lerp == this.offsetY) this.lerpCheck = false
      else {
        this.lerpCheck = true
        setTimeout(this.lerp, 1000/144)
      }
    }
  }
}
</script>

<style lang="scss">
.navigation_element_area {
  padding: calc(2vh + 2vw);
  cursor: pointer;
  .navigation_element {
    pointer-events: none;
  }
}
</style>

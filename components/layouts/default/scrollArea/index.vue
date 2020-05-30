<template>
<div :style="{ height: `${bodyScrollHeight}px` }">
  Scroll Area
</div>
</template>

<script>
export default {
  computed: {
    bodyScrollHeight () {
      return this.$store.getters['interface/bodyScroll']
    }
  }
}
</script>

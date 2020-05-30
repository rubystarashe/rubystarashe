<template>
<div :style="{ height: `${bodyScrollHeight}px` }">
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

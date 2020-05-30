<template>
<div class="test">
  
</div>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('loading/preloadList', 'test.gif')
  }
}
</script>

<style lang="scss">
.test {
  position: absolute;
  top: 0;
}
</style>
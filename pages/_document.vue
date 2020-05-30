<template>
<div>

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

</style>

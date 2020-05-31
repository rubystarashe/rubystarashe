<template>
<div class="pages_document_titleMenu_area">
  <v-title
    v-for="({ title }, index) in menu"
    :key="`${index}_${title}`"
    :index="index"
    :title="title"
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
    }
  }
}
</script>

<style lang="scss">
.pages_document_titleMenu_area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50vh 0;
  left: 0;
  right: 0;
}
</style>
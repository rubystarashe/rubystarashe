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
  },
  data () {
    return {
      focus: 0
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
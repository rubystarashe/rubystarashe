<template>
<nuxt-link :to="path">
<div class="document_titleMenu_title_area">
  <div class="index" v-show="inpage" :style="{ opacity: focus ? 1 : 0.7 }">{{computedIndex}}</div>
  <div class="title"
    :style="{
      color: focus ? 'black' : 'rgba(0, 0, 0, 0)',
      '-webkit-text-stroke': focus ? '1px #EFEFEF' : '1px black'
    }"
  >{{title}}</div>
  <div class="description" v-show="inpage" :style="{ opacity: focus ? 1 : 0.7 }">{{description}}</div>
</div>
</nuxt-link>
</template>

<script>
export default {
  props: ['index', 'title', 'description', 'focus', 'path', 'inpage'],
  computed: {
    computedIndex () {
      return this.index + 1 > 9 ? this.index + 1 : '0' + (this.index + 1)
    }
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

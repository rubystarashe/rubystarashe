<template>
<div class="document_titleMenu_title_area">
  <div>{{title}}</div>
</div>
</template>

<script>
export default {
  props: ['index', 'title']
}
</script>

<style lang="scss">
.document_titleMenu_title_area {
  height: 40vh;
}
</style>
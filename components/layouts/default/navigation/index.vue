<template>
<div>
  <v-left-bottom/>
  <v-left-top/>
  <v-right-middle/>
  <v-right-bottom/>
  <v-right-top/>
</div>
</template>

<script>
import vLeftBottom from './leftBottom'
import vLeftTop from './leftTop'
import vRightMiddle from './rightMiddle'
import vRightBottom from './rightBottom'
import vRightTop from './rightTop'

export default {
  components: {
    vLeftBottom,
    vLeftTop,
    vRightMiddle,
    vRightBottom,
    vRightTop
  }
}
</script>

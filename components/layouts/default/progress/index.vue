<template>
<div>
  <v-loading/>
  <v-bottom-progress/>
</div>
</template>

<script>
import vLoading from './loading'
import vBottomProgress from './bottomProgress'

export default {
  components: {
    vLoading,
    vBottomProgress
  }
}
</script>

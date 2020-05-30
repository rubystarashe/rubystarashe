<template>
<div>
  <v-progress-guide/>
  <v-loading/>
  <v-bottom-progress/>
</div>
</template>

<script>
import vLoading from './loading'
import vProgressGuide from './progressGuide'
import vBottomProgress from './bottomProgress'

export default {
  components: {
    vLoading,
    vProgressGuide,
    vBottomProgress
  }
}
</script>

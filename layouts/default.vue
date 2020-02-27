<template>
<div>
  <v-navigation/>
  <nuxt/>
  <v-title-menu/>
  <v-progress/>
</div>
</template>

<script>
import vProgress from '~/components/layouts/default/progress'
import vNavigation from '~/components/layouts/default/navigation'
import vTitleMenu from '~/components/layouts/default/titleMenu'

export default {
  components: {
    vProgress,
    vNavigation,
    vTitleMenu
  }
}
</script>

<template>
  <div>
    <Header/>
    <nuxt/>
  </div>
</template>

<script>
import Header from '~/components/HeaderItem.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="sass">
@import '~/assets/styling/main.sass'

#__layout
  padding: $spacing
</style>


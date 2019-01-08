<template>
  <router-link class="home" tag="div" to="/projects">
    <div class="landing">
      <ul class="logo">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <img src="~/assets/images/simone-hutsch-661876-unsplash.jpg">
  </router-link>
</template>

<script>
export default {
  name: 'home',
  Data: {
    logo: true,
    navigation: true
  }
}
</script>

<style lang="sass">
@import '~/assets/styling/variables.sass'

.home
  width: 100%
  height: calc(100vh - (2 * #{$spacing}))
  cursor: pointer
  img
    width: 100%
    height: 100%
    object-fit: cover
    object-position: 50% 50%
  .landing
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    display: inline-flex
    padding: $spacing
    .logo
      width: calc((6vmin * 3) + (.5vmin * 3))
      transition: opacity .2s ease
      cursor: pointer
      &:hover
        opacity: .75
      li
        width: 6vmin
        height: 6vmin
        margin-right: .5vmin
        margin-bottom: .5vmin
</style>

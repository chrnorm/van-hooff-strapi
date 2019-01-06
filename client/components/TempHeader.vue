<template>
  <ul class="tempHeader">
    <nuxt-link tag="li" to="/">Landing</nuxt-link>
    <nuxt-link tag="li" to="/projects">Projects</nuxt-link>
    <nuxt-link tag="li" to="/profile">Profile</nuxt-link>
  </ul>
</template>

<style lang="sass">
.tempHeader
  background: grey
  display: flex
  flexwrap: nowrap
  justify-content: flex-start
  li
    padding: 3vmin
    cursor: pointer
</style>

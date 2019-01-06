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

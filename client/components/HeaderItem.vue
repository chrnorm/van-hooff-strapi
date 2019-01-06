<template>
  <transition name="headeritem">
    <div class="headerItem" v-if="this.$route.path !== '/'">
      <router-link class="logo" tag="ul" to="/">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </router-link>

      <ul class="menu menu-Filter" v-if="this.$route.path === '/projects'">
        <li>
          <p @click="$bus.$emit('filterClick')">
            <span>All Projects</span>
            <span>/</span>
          </p>
        </li>
        <li>
          <p @click="$bus.$emit('filterClick')">
            <span>Art</span>
            <span>/</span>
          </p>
        </li>
        <li>
          <p @click="$bus.$emit('filterClick')">
            <span>Transformation</span>
            <span>/</span>
          </p>
        </li>
        <li>
          <p @click="$bus.$emit('filterClick')">
            <span>Living</span>
            <span>/</span>
          </p>
        </li>
        <li>
          <p @click="$bus.$emit('filterClick')">
            <span>Working</span>
            <span>/</span>
          </p>
        </li>
        <li>
          <p @click="$bus.$emit('filterClick')">
            <span>Recreation</span>
            <span>/</span>
          </p>
        </li>
        <li>
          <p @click="$bus.$emit('filterClick')">
            <span>Study</span>
            <span>/</span>
          </p>
        </li>
        <li>
          <p @click="$bus.$emit('filterClick')">
            <span>Concept</span>
            <span>/</span>
          </p>
        </li>
        <br>
        <br>
        <router-link tag="li" to="/Profile">
          <p>
            <span>Profile</span>
            <span>/</span>
          </p>
        </router-link>
      </ul>

      <ul
        class="menu menu-Filter"
        v-if="this.$route.path === '/Profile' || this.$route.path === '/project'"
      >
        <router-link tag="li" to="/projects" class="menu-arrow">
          <img class="arrow" src="@/assets/images/arrow.png">
          <p>
            <span>Index</span>
            <span>/</span>
          </p>
        </router-link>
      </ul>
    </div>
  </transition>
</template>

<style lang="sass">
$spacing: 24px

.headerItem
  position: fixed
  top: 0
  left: 0
  display: inline-flex
  padding: $spacing
  .menu
    position: relative
    display: inline-block
    width: 244px
    margin-left: $spacing
    li
      display: inline-block
      span:first-child
        display: inline
        cursor: pointer
      span:first-child:hover
        text-decoration: underline
      span:last-child
        margin-left: 6px
        margin-right: 6px
        // background: purple
    li:last-child
      span:last-child
        display: none
  .menu-arrow
    padding-top: 28px
    padding-right: $spacing
    padding-bottom: 28px
    cursor: pointer
    &:hover > p
      text-decoration: underline
    p
      display: inline
      margin-left: 6px
    img
      width: 24px
      height: 13px
      display: inline

.logo
  display: inline-flex
  flex-wrap: wrap
  width: calc((24px * 3) + (2px * 3))
  margin-left: $spacing
  margin-right: $spacing
  align-content: flex-start
  cursor: pointer
  li
    width: 24px
    height: 24px
    background: black
    margin-right: 2px
    margin-bottom: 2px
  li:nth-child(2), li:nth-child(8)
    background: transparent
</style>

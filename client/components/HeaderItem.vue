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
        <router-link tag="li" to="/projects">
          <p>
            <span>All Projects</span>
            <span>/</span>
          </p>
        </router-link>
        <router-link to="/" tag="li" v-for="project in filteredList" :key="project.id">
          <p>
            <span>{{ project.categories.title }} / &nbsp;</span>
          </p>
        </router-link>
        <br>
        <br>
        <router-link tag="li" to="/Profile">
          <p>
            <span>Profile</span>
          </p>
        </router-link>
      </ul>

      <ul
        class="menu menu-Filter"
        v-if="this.$route.name === 'profile' || this.$route.name === 'projects-id'"
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

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    filteredList() {
      return this.projects.filter(project => {
        return project.title.toLowerCase().includes(this.query.toLowerCase())
      })
    },
    projects() {
      return this.$store.getters['projects/list']
    }
  },
  async fetch({ store }) {
    store.commit('projects/emptyList')
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
            projects {
              categories {
                title
              }
            }
          }
          `
      }
    })
    response.data.projects.forEach(project => {
      store.commit('projects/add', {
        id: project.id || project._id,
        ...project
      })
    })
  }
}
</script>


<style lang="sass">
@import '~/assets/styling/variables.sass'

.headerItem
  position: fixed
  top: 0
  left: 0
  display: inline-flex
  padding: $spacing
  .menu
    position: relative
    display: inline-block
    width: 200px
    margin-left: $spacing
    li
      display: inline-block
      span:first-child
        display: inline
        cursor: pointer
      span:first-child:hover
        text-decoration: underline
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
  transition: opacity .2s ease
  cursor: pointer
  &:hover
    opacity: .75
  li
    width: 24px
    height: 24px
    background: black
    margin-right: 2px
    margin-bottom: 2px
  li:nth-child(2), li:nth-child(8)
    background: transparent
</style>

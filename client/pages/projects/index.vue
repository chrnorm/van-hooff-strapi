<template>
  <div class="productsItem">
    <transition-group name="productlist" tag="ul">
      <router-link
        :to="{ name: 'projects-id', params: { id: project.id }}"
        tag="li"
        v-for="project in filteredList"
        :key="project.id"
      >
        <img :src="project.cover.url">
        <div class="product-TitleDate">
          <div>
            <h1>{{ project.title }}</h1>
          </div>
          <div>
            <p v-if="project.categories">{{ project.categories.title }}</p>
          </div>
        </div>
        <p v-if="project.text">{{ project.text }}</p>
      </router-link>
    </transition-group>
  </div>
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
      console.log(this.$store.getters['projects/list'])
      return this.$store.getters['projects/list']
    }
  },
  async fetch({ store }) {
    store.commit('projects/emptyList')
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
            projects {
              _id
              title
              text
              categories {
                title
              }
              cover {
                url
              }
            }
          }
          `
      }
    })
    response.data.projects.forEach(project => {
      project.cover.url = `${apiUrl}${project.cover.url}`
      store.commit('projects/add', {
        id: project.id || project._id,
        ...project
      })
    })
  }
}
</script>

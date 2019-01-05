<template>
  <section class="container">
    <div class="projectsList">
      <ul>
        <router-link
          :to="{ name: 'projects-id', params: { id: project.id }}"
          tag="li"
          v-for="project in filteredList"
          :key="project.id"
        >
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ project.text || 'No description provided' }}.</p>
        </router-link>
        <p v-if="!filteredList.length">No results :(</p>
      </ul>
    </div>
  </section>
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
              _id
              title
              text
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

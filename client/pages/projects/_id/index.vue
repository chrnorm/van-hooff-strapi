<template>
  <!-- single project -->
  <div class="page-Container">
    <ul :key="project.id" v-for="project in projects">
      <li>
        <p>{{ project.title }}</p>
        <p>{{ project.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default {
  computed: {
    id() {
      return this.$route.params.id
    },
    projects() {
      return this.$store.getters['projects/list']
    }
  },
  async fetch({ store, params }) {
    store.commit('projects/emptyList')
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
            projects(id: "${params.id}") {
              _id
              title
              text
              cover {
                url
              }
              images {
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


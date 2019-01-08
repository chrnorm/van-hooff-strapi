<template>
  <div>
    <div class="productItem">
      <ul :key="project.id" v-for="project in projects">
        <li>
          <div class="product-Image" @click="showModal = true">
            <img :src="project.cover.url">
          </div>
          <div class="product-TitleDate">
            <div>
              <h1>{{ project.title }}</h1>
            </div>
            <div>
              <!-- TODO: return project.category.title
              <p>{{ project.category }}</p>-->
            </div>
          </div>
          <p class="productItem-Text">{{ project.text }}</p>
          <!-- TODO: return project.images
v          <div class="product-Image" @click="showModal = true">
            <img :src="project.images">
          </div>-->
          <div class="product-Footer">
            <router-link tag="div" to="/Product" class="product-Footer_Prev">
              <img class="arrow" src="@/assets/images/arrow.png">
              <p>Previous Project</p>
            </router-link>
            <router-link tag="div" to="/Product" class="product-Footer_Next">
              <p>Next</p>
              <img class="arrow" src="@/assets/images/arrow.png">
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <modalItem v-if="showModal" @close="showModal = false">
      <sliderItem @close="showModal = false"></sliderItem>
    </modalItem>
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
import SliderItem from '@/components/SliderItem.vue'
import ModalItem from '@/components/ModalItem.vue'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default {
  components: {
    SliderItem,
    ModalItem
  },
  data() {
    return {
      showModal: false
    }
  },
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
            project(id: "${params.id}") {
              _id
              title
              category
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
    let project = response.data.project
    project.cover.url = `${apiUrl}${project.cover.url}`
    store.commit('projects/add', {
      id: project.id || project._id,
      ...project
    })
  }
}
</script>


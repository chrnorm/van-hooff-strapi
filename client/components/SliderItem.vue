<template>
  <div class="slider-Container">
    <transition-group name="slider" tag="div">
      <div class="image-Slider" v-for="number in [currentNumber]" :key="number">
        <img :src="currentImage">
        <div @click="previous" class="image-Slider_Nav image-Slider_Prev"></div>
        <div @click="$emit('close')" class="image-Slider_Nav image-Slider_Close"></div>
        <div @click="next" class="image-Slider_Nav image-Slider_Next"></div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'SliderItem',
  data() {
    return {
      currentNumber: 0,
      images: [
        'https://images.unsplash.com/photo-1515405473623-5b7cf46fc8e7?ixlib=rb-0.3.5&s=1a5663e562069508524430471d7eb8fb',
        'https://images.unsplash.com/photo-1463471931752-562bc2f299e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7de443d1d5625e2a0d193efc666d1b72',
        'https://images.unsplash.com/photo-1515489222325-2dbd3caa7fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1b33b095c67c0f5f8556948a08d0ec0'
      ]
    }
  },

  methods: {
    next: function() {
      this.currentNumber += 1
    },

    previous: function() {
      this.currentNumber -= 1
    }
  },
  computed: {
    currentImage: function() {
      return this.images[Math.abs(this.currentNumber) % this.images.length]
    }
  }
}
</script>

<style lang="sass">
  .slider-enter-active, .slider-leave-active
    transition: all .2s ease
  .slider-enter, .slider-leave-to
    opacity: 0
</style>

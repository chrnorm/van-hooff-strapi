<template>
  <div>
    <div class="profileItem">
      <ul>
        <li>
          <div class="product-Image" @click="showModal = true">
            <!-- <img src="@/assets/images/ryan-walton-520633-unsplash.jpg"> -->
            <img src="@/assets/images/tucker-good-589776-unsplash.jpg">
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br>
            <br>
            <a href>info@viktorvanhooff.nl</a>
            <br>
            <a href>+31(0)69837243</a>
          </p>
        </li>
      </ul>
    </div>

    <modalItem v-if="showModal" @close="showModal = false">
      <sliderItem @close="showModal = false"></sliderItem>
    </modalItem>
  </div>
</template>

<script>
import ModalItem from "@/components/ModalItem.vue";
import SliderItem from "@/components/SliderItem.vue";

export default {
  name: "ProfileItem",
  components: {
    SliderItem,
    ModalItem
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

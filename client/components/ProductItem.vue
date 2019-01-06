<template>

<div>
  
  <div class="productItem">

    <ul>
      <li>
        <div class="product-Image" @click="showModal = true">
          <img src="@/assets/images/simone-hutsch-512042-unsplash.jpg">
        </div>
        <div class="product-TitleDate">
          <div><h2>Title</h2></div>
          <div><p>Concept</p></div>
        </div>
        <p class="productItem-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div class="product-Image" @click="showModal = true">
          <img src="@/assets/images/simone-hutsch-506164-unsplash.jpg">
        </div>
        <div class="product-Image" @click="showModal = true">
          <img src="@/assets/images/simone-hutsch-476717-unsplash.jpg">
        </div>
        <div class="product-Footer">
          <router-link tag="div" to="/Product" class="product-Footer_Prev">
            <img class="arrow" src="@/assets/images/arrow.png"><p>Previous Project</p>
          </router-link>
          <router-link tag="div" to="/Product" class="product-Footer_Next">
            <p>Next</p><img class="arrow" src="@/assets/images/arrow.png">
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
import SliderItem from "@/components/SliderItem.vue";
import ModalItem from "@/components/ModalItem.vue";

export default {
  name: "ProductItem",
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

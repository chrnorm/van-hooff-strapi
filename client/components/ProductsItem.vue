<template>

  <div class="productsItem">
    <transition-group name="productlist" tag="ul">

      <router-link tag="li" to="/Product" v-if="filter" key="1">
        <img src="@/assets/images/simone-hutsch-506164-unsplash.jpg">
        <div class="product-TitleDate">
          <div><h2>Title</h2></div>
          <div><p>Study</p></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </router-link>

      <router-link tag="li" to="/Product" v-if="filter" key="2">
        <img src="@/assets/images/simone-hutsch-507369-unsplash.jpg">
        <div class="product-TitleDate">
          <div><h2>Title</h2></div>
          <div><p>Living</p></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </router-link>

      <router-link tag="li" to="/Product" key="3">
        <img src="@/assets/images/simone-hutsch-512042-unsplash.jpg">
        <div class="product-TitleDate">
          <div><h2>Title</h2></div>
          <div><p>Concept</p></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </router-link>

      <router-link tag="li" to="/Product" key="4">
        <img src="@/assets/images/simone-hutsch-512056-unsplash.jpg">
        <div class="product-TitleDate">
          <div><h2>Title</h2></div>
          <div><p>Concept</p></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </router-link>

      <router-link tag="li" to="/Product" v-if="filter" key="5">
        <img src="@/assets/images/simone-hutsch-516380-unsplash.jpg">
        <div class="product-TitleDate">
          <div><h2>Title</h2></div>
          <div><p>Recreation</p></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </router-link>

      <router-link tag="li" to="/Product" v-if="filter" key="6">
        <img src="@/assets/images/simone-hutsch-518069-unsplash.jpg">
        <div class="product-TitleDate">
          <div><h2>Title</h2></div>
          <div><p>Living</p></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </router-link>

      <router-link tag="li" to="/Product" v-if="filter" key="7">
        <img src="@/assets/images/simone-hutsch-518075-unsplash.jpg">
        <div class="product-TitleDate">
          <div><h2>Title</h2></div>
          <div><p>Concept</p></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </router-link>

    </transition-group>
  </div>

</template>

<script>
export default {
  name: "ProductsItem",
  data() {
    return {
      filter: true
    };
  },
  created() {
    this.$bus.$on("filterClick", $event => {
      // console.log(this.filter);
      this.filter = !this.filter;
    });
  },
  methods: {
    filterClick() {
      this.filter === !this.filter;
    }
  }
};
</script>

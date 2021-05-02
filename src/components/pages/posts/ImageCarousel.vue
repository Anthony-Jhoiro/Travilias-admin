<template>
  <div class="carousel">
    <button class="control-icon left" @click="previous">
      <font-awesome-icon icon="chevron-left" />
    </button>
    <div class="image-slide">
      <img
        :src="images[currentIndex].url"
        :alt="'img_' + images[currentIndex].id"
      />
    </div>
    <button class="control-icon right" @click="next">
      <font-awesome-icon icon="chevron-right" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Image } from "/@/types";

export default defineComponent({
  name: "ImageCarousel",
  props: {
    images: {
      type: Array as PropType<Image[]>,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },

  methods: {
    next() {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    previous() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex--;
      }
    },
  },
});
</script>

<style>
.carousel {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.control-icon {
  border: none;
  background: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
}

.image-slide {
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-slide img {
  max-height: 100%;
  max-width: 100%;
}
</style>
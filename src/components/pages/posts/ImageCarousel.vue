<template>
  <div class="carousel">
    <button class="control-icon left">
      <font-awesome-icon icon="chevron-left" />
    </button>
    <div class="image-slide">
      <img
        :src="images[currentIndex].url"
        :alt="'img_' + images[currentIndex].id"
      />
    </div>
    <button class="control-icon right">
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
});
</script>

<style>
.carousel {
  width: 100%;
  display: flex;
  align-items: center;
}

.control-icon {
  border: none;
  background: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
}

.image-slide img{
  height: 100%;
  width: 100%;
}
</style>
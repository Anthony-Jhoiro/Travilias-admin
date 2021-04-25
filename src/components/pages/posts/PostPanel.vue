<template>
  <div class="post-card-container">
    <div class="post-card">
      <div class="title">
        <h3 class="post-title">{{ post.title }}</h3>
      </div>
      <div class="author">
        <user-line :user="post.author" />
      </div>
      <div class="map">
        <GoogleMap
          :api-key="mapApiKey"
          style="width: 100%; height: 150px"
          :center="markerOptions.position"
          :zoom="15"
        >
          <Marker :options="{ postions: markerOptions }" />
        </GoogleMap>
      </div>
      <div class="images">
        <!-- <img v-if="post.images && post.images.length > 0" :src="post.images[0].url" :alt="post.images[0].url" /> -->
        <div v-if="post.images && post.images.length > 0">
          <image-carousel :images="post.images" />
        </div>
      </div>
      <div class="text">
        <p>{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserLine } from "../../shared";
import ImageCarousel from "./ImageCarousel.vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  name: "PostPanel",
  components: {
    UserLine,
    ImageCarousel,
    GoogleMap,
    Marker,
  },
  data() {
    return {
      mapApiKey: import.meta.env.VITE_MAP_API_KEY ?? null,
      markerOptions: {
        position: {
          lat: this.post.location.lat,
          lng: this.post.location.lng,
        },
        label: this.post.title[0],
        title: this.post.title

      },
    };
  },
  props: {
    post: { type: Object, required: true },
  },
});
</script>

<style>
.post-card-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 82px);
  overflow-y: scroll;
}

.post-card {
  display: grid;
  grid-template-areas: "title images images" "author images images" "map images images" "text text text";
  width: clamp(50%, 200px, 50ch);
  background-color: #222;
  color: #fff;
  padding: 20px;
  border-radius: 20px;
}

.title {
  grid-area: title;
}

.post-title {
  font-size: 2em;
}

.author {
  grid-area: author;
}

.images {
  grid-area: images;
}

.text {
  grid-area: text;
}

.map {
  grid-area: map;
}
</style>
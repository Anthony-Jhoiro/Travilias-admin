<template>
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
      <div v-if="post.images && post.images.length > 0" class="carousel">
        <image-carousel :images="post.images" />
      </div>
    </div>
    <div class="text">
      <p>{{ post.content }}</p>
    </div>
    <div class="controls">
      <button
        class="control-button check"
        v-tooltip.bottom="'Marquer comme valide'"
        @click="onCheck"
      >
        <font-awesome-icon icon="check" />
      </button>

      <button
        class="control-button control"
        v-tooltip.bottom="'Ouvrir les options de control'"
        @click="onControlClick"
      >
        <font-awesome-icon icon="cog" />
      </button>

      <button
        class="control-button reports"
        v-tooltip.bottom="'Afficher les repports'"
        @click="showReports"
      >
        <font-awesome-icon icon="flag" />
      </button>
    </div>

    <div class="control-state" v-if="post.controlType">
      <p>Controlled at {{ formatDate(post.controlledAt) }}</p>
      <p>Controlled as {{ post.controlType }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserLine } from "../../shared";
import ImageCarousel from "./ImageCarousel.vue";
//@ts-ignore
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
        title: this.post.title,
      },
    };
  },
  methods: {
    showReports() {
      this.$emit("showReports");
      //onControlClick onCheck
    },
    onControlClick() {
      this.$emit("onControlClick");
    },
    onCheck() {
      this.$emit("onCheck");
    },
    formatDate(date: Date): string {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();
      const hour = date.getHours();
      const mins = date.getMinutes();

      return `${year}-${month}-${day} ${hour}:${mins}`;
    },
  },
  props: {
    post: { type: Object, required: true },
  },
});
</script>

<style>
.post-card {
  width: 100%;
  display: grid;
  grid-template-areas: "title title images controls" "author control-state images controls" "map map images controls" "text text text controls";
  background-color: #222;
  color: #fff;
  padding: 20px;
  border-radius: 20px;
  grid-template-columns: 0.5fr 0.5fr 1fr 0.5fr;
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

.carousel {
  height: 400px;
}

.controls {
  grid-area: controls;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.control-button {
  background: #333;
  border: none;
  outline: none;
  cursor: pointer;
  height: 80px;
  width: 80px;
  color: #fff;
  font-size: 32px;
  transition: 0.2s;
}

.control-button.check:hover {
  color: #83f287;
}

.control-button.control:hover {
  color: #e8a989;
}

.control-button.reports:hover {
  color: #82b4db;
}

.control-state {
  grid-area: control-state;
  background-color: #333;
}
</style>
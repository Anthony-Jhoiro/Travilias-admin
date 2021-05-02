<template>
  <div class="image-page">
    <Galleria
      :responsiveOptions="responsiveOptions"
      :value="images"
      v-model:activeIndex="activeIndex"
      style="min-width: 100%; height: 100vh"
    >
      <template #item="image">
        <!-- <p>{{JSON.stringify(image.item)}}</p> -->
        <image-panel
          :image="image.item"
          @control="(ct) => onControl(image.item.id, ct)"
        />
      </template>
      <template #thumbnail="image">
        <div class="thumbnail">
          <img :src="image.item.url" :alt="image.item.url" />
        </div>
      </template>
    </Galleria>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { controlImage, getImages } from "../../../api/images";
import { UserLine } from "../../shared/UserLine";
import { CONTROLS, ControlType } from "../../../types";
import ImagePanel from "./ImagePanel.vue";
import { useStore } from "vuex";

const LIMIT = 10;

export default defineComponent({
  name: "ImagesList",
  components: {
    UserLine,
    ImagePanel,
  },
  setup() {
    const searchDate = ref(new Date());

    getImages(LIMIT, 0, searchDate.value);

    return {
      searchDate,
    };
  },

  data() {
    return {
      warningChips: CONTROLS.warning,
      dangerChips: CONTROLS.danger,
      activeIndex: 0,
      page: 0,
    };
  },
  methods: {
    onControl(imageId: string, type: ControlType) {
      controlImage(imageId, type);
      this.next();
    },
    next() {
      this.activeIndex =
        this.activeIndex === this.images.length - 1 ? 0 : this.activeIndex + 1;
    },
    search() {
      getImages(LIMIT, this.page, this.searchDate);
    },
  },
  computed: {
    images() {
      const store = useStore();

      return store.state.images.images;
    },
  },
  watch: {
    activeIndex(newActiveIndex) {
      if (newActiveIndex > this.images.length - LIMIT / 2) {
        this.page++;
        this.search();
      }
    },
  },
});
</script>

<style>
.thumbnail {
  display: block;
  aspect-ratio: 1;
  overflow: hidden;
  height: 50px;
  width: 50px;
  margin: 0 2px;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-card {
  width: 100%;
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 82px);
}

.image-container {
  min-height: 40%;
  max-height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-container img {
  max-height: 100%;
  max-width: 100%;
}

.image-details p {
  color: #fff;
}

.valid-button {
  font-size: 2em;
  color: #fff;
  background-color: #b9bf69;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
}

.chip {
  background-color: #fff;
  border: 3px solid;
  padding: 5px 10px;
  border-radius: 50px;
  margin: 5px;
  text-align: center;
  cursor: pointer;
}

.chip.warning {
  border-color: #d9aa55;
}

.chip.danger {
  border-color: #d94e41;
}

.controllers {
  display: flex;
  margin: 10px 0;
}

.control-state {
  background-color: #ffffff22;
  padding: 20px;
  margin: 20px 0;
}

.control-state p {
  color: #fff;
  margin: 0;
}
</style>
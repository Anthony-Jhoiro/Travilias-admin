<template>
  <Galleria
    :value="posts"
    :circular="true"
    v-model:activeIndex="activeIndex"
    style="min-width: 100%; height: 100vh"
  >
    <template #item="post">
      <post-panel :post="post.item" />
    </template>

    <template #thumbnail="post">
      <div class="thumbnail">
        <img v-if="post.item.images && post.item.images.length > 0" :src="post.item.images[0].url"  :alt="post.item.images[0].url"/>
      </div>
    </template>
  </Galleria>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { getPosts } from "../../../api/posts";
import PostPanel from "./PostPanel.vue";

export default defineComponent({
  name: "PostsPage",
  components: {
    PostPanel,
  },
  setup() {
    getPosts(10, 0, new Date());
  },
  computed: {
    posts() {
      const store = useStore();

      return store.state.posts.posts;
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
  background-color: #ddd;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
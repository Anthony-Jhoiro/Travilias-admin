<template>
  <Galleria
    :value="posts"
    :circular="true"
    v-model:activeIndex="activeIndex"
    style="min-width: 100%; height: 100vh"
  >
    <template #item="post">
      <div class="post">
        <post-panel :post="post.item" />
        <div v-if="post.item.controlType" class="control-state">
          <p>Controlled At : {{formatDate(post.item.controlledAt)}}</p>
          <p>Controlled As : {{post.item.controlType}}</p>
        </div>
        <control-panel @control="(ctrl) => control(post.item.id, ctrl)" />
      </div>
    </template>

    <template #thumbnail="post">
      <div class="thumbnail">
        <img
          v-if="post.item.images && post.item.images.length > 0"
          :src="post.item.images[0].url"
          :alt="post.item.images[0].url"
        />
      </div>
    </template>
  </Galleria>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { controlPost, getPosts } from "../../../api/posts";
import PostPanel from "./PostPanel.vue";
import { ControlPanel } from "../../shared/ControlPanel";
import { ControlType } from "../../../types";

export default defineComponent({
  name: "PostsPage",
  components: {
    PostPanel,
    ControlPanel,
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
  methods: {
    control(postId: string, control: ControlType) {
      controlPost(postId, control);
    },
    formatDate(date: Date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();
      const hour = date.getHours();
      const mins = date.getMinutes();

      return `${year}-${month}-${day} ${hour}:${mins}`
    },
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  next() {
      this.activeIndex = (this.activeIndex === this.posts.length - 1) ? 0 : this.activeIndex + 1;
    }
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

.post {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: calc(100vh - 82px);
  padding: 20px;
}

.control-state {
  background-color: #333;
  padding: 10px 20px;
}
</style>
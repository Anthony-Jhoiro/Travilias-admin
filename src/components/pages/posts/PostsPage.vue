<template>

  <div class="post-page">
    <div class="post-container" v-for="post in posts" :key="post.id">
      <post-panel
        :post="post"
        @showReports="() => openSidebar(post)"
        @onControlClick="() => (selectedToBeControlled = post)"
        @onCheck="() => control(post.id, 'VALID')"
      />
    </div>
    <div class="next-button-container">
    <button class="button-next" @click="next">Suite</button>
    </div>

    <Sidebar v-model:visible="sidebarOpen" position="right">
      <h2>Signalements</h2>
      <p v-if="activeReports.length === 0">Aucun signalement n'a été trouvé</p>
      <div class="repports" v-else>
        <div
          class="repport-container"
          v-for="(report, index) in activeReports"
          :key="'report_' + index"
        >
          <repport :repport="report" />
        </div>
      </div>
    </Sidebar>

    <Dialog v-model:visible="selectedToBeControlled">
      <template #header>
        <h3>Controller le post</h3>
      </template>
      <div class="control-container">
        <control-panel @control="(ctrl) => control(selectedToBeControlled.id, ctrl)" />
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { controlPost, getPosts } from "../../../api/posts";
import PostPanel from "./PostPanel.vue";
import Repport from "./Repport.vue";
import { ControlPanel } from "../../shared/ControlPanel";
import { ControlType } from "../../../types";

export default defineComponent({
  name: "PostsPage",
  components: {
    PostPanel,
    Repport,
    ControlPanel,
  },
  setup() {
    const page = ref(0);
    const startDate = ref(new Date());
    getPosts(10, page.value, startDate.value);

    return {
      page,
      startDate
    }
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
      this.selectedToBeControlled = null;
    },
    openSidebar(post: any) {
      this.activeReports = post.reports;
      this.sidebarOpen = true;
    },
    next() {
      this.page++;
      getPosts(10, this.page, this.startDate);
    }
  },
  data() {
    return {
      activeIndex: 0,
      sidebarOpen: false,
      activeReports: [],
      selectedToBeControlled: null,
    };
  },
});
</script>

<style>
.post-page {
  width: 100%;
}

.post-container {
  width: 100%;
  padding: 20px;
}

.repport-container {
  margin: 10px 0;
}

.control-container {
  color: #222;
}

.repports {
  overflow-y: scroll;
  max-height: calc(100vh - 101px)
}

.next-button-container {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  
}
.button-next {
  font-size: 1.5rem;
  background-color: #82b4db;
  color: #fff;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
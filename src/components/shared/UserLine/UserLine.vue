<template>
  <div class="author-line">
    <div class="author-profile-picture">
      <img
        :src="user.profile_picture"
        :alt="user.username + ' profile picture'"
      />
    </div>
    <div class="author-details">
      <p class="author-username">{{ user.username }}</p>
      <p class="author-displayed-name">{{ user.displayedName }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "/@/types";

export default defineComponent({
  name: "UserLine",
  props: {
    user: Object as PropType<User>,
  },
});
</script>

<style>
.author-line {
  display: flex;
  align-items: center;
}

.author-profile-picture {
  height: 50px;
  width: 50px;
  overflow: hidden;
  border-radius: 25px;
}

.author-profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-details {
  margin-left: 10px;
}

.author-username {
  color: #ccc;
  margin: 0;
}

.author-displayed-name {
  color: #fff;
  margin: 0;
}

.image-page {
  overflow: hidden;
}
</style>
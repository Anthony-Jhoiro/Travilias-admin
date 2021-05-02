<template>
  <div class="repport">
    <div class="user-content">
      <user-line :user="repport.author" />
    </div>
    <p class="repport-type">{{repport.type}}</p>
    <p>{{repport.message}}</p>
    <p class="repport-date">
      <font-awesome-icon icon="calendar" />
      Création : {{formatDate}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserLine } from "../../shared";

export default defineComponent({
  name: "PostPanel",
  components: {
    UserLine
  },
  props: {
    repport: { type: Object, required: true }
  },
  computed: {
    formatDate(): string {
      const date = new Date(this.repport.createdAt);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();
      const hour = date.getHours();
      const mins = date.getMinutes();

      return `${year}-${month}-${day} ${hour}:${mins}`
    },
  }
});

</script>

<style>

.repport {
  padding: 8px;
  background: #333;
  border-radius: 10px;
}

.repport-date {
  color: #aaa;
}

.repport-type {
  display: inline-block;
  padding: 7px 10px;
  background-color: #82B4DB;
  margin-top: 10px;
  border-radius: 15px;
  font-weight: 600;
}

</style>
<template>
      <div class="image-card">
        <div class="image-container">
          <img :src="image.url" :alt="image.url" />
        </div>

        <div class="image-details">
          <p>Created on : {{formatDate(image.createdAt)}}</p>
          <p>Type : {{image.type}}</p>
        </div>

        <div class="author">
          <user-line :user="image.owner" />
        </div>

        <div class="control-state" v-if="image.controlType">
          <p>Last control : {{formatDate(image.controlledAt)}}</p>
          <p>Controlled as : {{image.controlType}}</p>
        </div>

        <button class="valid-button" @click="() => control('VALID')" >
          <font-awesome-icon icon="check" />
          Valid
        </button>

        <div class="controllers">
          <div class="controller-list" >
            <div class="chip warning" v-for="c of warningChips" :key="c" @click="() => control(c)">{{c}}</div>
          </div>
          <div class="controller-list">
            <div class="controller-list" >
            <div class="chip danger" v-for="c of dangerChips" :key="c" @click="() => control(c)">{{c}}</div>
          </div>
          </div>
        </div>

      </div>
    
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserLine } from "../../shared/UserLine";
import { CONTROLS, ControlType } from "../../../types";

export default defineComponent({
  name: "ImagePanel",
  components: {
    UserLine
  },
  props: {
    image: Object
  },
  data() {
    return {
      warningChips: CONTROLS.warning,
      dangerChips: CONTROLS.danger,
    };
  },
  methods: {
    formatDate(date: Date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();
      const hour = date.getHours();
      const mins = date.getMinutes();

      return `${year}-${month}-${day} ${hour}:${mins}`
    },
    control(type: ControlType) {
      this.$emit('control', type);
    }
  }
});
</script>

<style>


.image-card {
  width: 100%;
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 82px);
  overflow-y: scroll;
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
  padding:  10px 20px;
  margin-top: 10px;
  cursor: pointer;
}

.chip {
  background-color: #fff;
  border : 3px solid;
  padding: 5px 10px;
  border-radius: 50px;
  margin: 5px;
  text-align: center;
  cursor: pointer;
}

.chip.warning {
  border-color: #D9AA55;
}

.chip.danger {
  border-color: #D94E41;
}

.controllers {
  display: flex;
  margin: 10px 0;
}

.control-state {
  background-color: #ffffff22;
  padding: 20px;
  margin:  20px 0;
}

.control-state p {
  color: #fff;
  margin: 0;
}

</style>
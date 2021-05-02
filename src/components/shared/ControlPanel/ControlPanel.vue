<template>
  <div>
    <button class="valid-button" @click="() => sendControl('VALID')">
      <font-awesome-icon icon="check" />
      Valid
    </button>

    <div class="controllers">
      <div class="controller-list">
        <div
          class="chip warning"
          v-for="c of warningChips"
          :key="c"
          @click="() => sendControl(c)"
        >
          {{ c }}
        </div>
      </div>
      <div class="controller-list">
        <div class="controller-list">
          <div
            class="chip danger"
            v-for="c of dangerChips"
            :key="c"
            @click="() => sendControl(c)"
          >
            {{ c }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CONTROLS, ControlType } from "../../../types";

export default defineComponent({
  name: "ControlPanel",
  data() {
    return {
      warningChips: CONTROLS.warning,
      dangerChips: CONTROLS.danger,
    };
  },
  methods: {
    sendControl(ctrl: ControlType) {
      this.$emit("control", ctrl);
    },
  },
});
</script>

<style>
</style>
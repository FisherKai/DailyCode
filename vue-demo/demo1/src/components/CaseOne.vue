<template>
  <section>
    <button @click="add">
      Count is:{{ state.count }},double is:{{ state.double }}
    </button>
  </section>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name:"CaseOne",
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    const add = () => {
      state.count++;
    };
    return {
      add,
      state,
    };
  },
};
</script>

<style>
</style>
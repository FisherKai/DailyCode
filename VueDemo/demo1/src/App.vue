<template>
  <section>
    <!-- <CaseOne />
    <MyList msg="Welcome to Your Vue.js App" /> -->
    <DragComponentOne />
  </section>
</template>

<script>
// import CaseOne from "./components/CaseOne.vue";
import DragComponentOne from './components/DragComponentOne.vue';
// import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: {
    // MyList,
    // CaseOne,
    DragComponentOne
  },
};
</script>

<style>
html,
body{
  padding: 0
}
</style>

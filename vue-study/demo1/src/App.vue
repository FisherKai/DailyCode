<template>
  <section>
    <CaseOne />
    <MyList msg="Welcome to Your Vue.js App" />
  </section>
</template>

<script>
import CaseOne from "./components/CaseOne.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: {
    MyList,
    CaseOne,
  },
};
</script>

<style>
</style>

<template>
  <section class="drag-of-container">
    <div id="slot" @drag="slotDrag" draggable="true" ref="slot"></div>
    <div id="block" @drag="blockDrag" draggable="true" ref="block"></div>
  </section>
</template>

<script>
export default {
  name: "DragComponentOne",
  setup() {
   
  },
  methods: {
    slotDrag(e) {
      console.log(e);
    },
    blockDrag(e) {
      console.log(e);
    },
  },
};
</script>

<style>
.drag-of-container {
  width: 100%;
  height: 100%;
}
#slot {
  position: fixed;
  border: 2px solid black;
  width: 100px;
  height: 100px;
}
#block {
  position: fixed;
  top: 50%;
  left: 50%;
  background: orange;
  width: 100px;
  height: 100px;
}
</style>
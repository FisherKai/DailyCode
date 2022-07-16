<template>
  <section class="drag-of-container">
    <div id="slot" @dragenter="slotDragEnter" @dragleave="slotDragLeave" draggable="true" ref="slot"></div>
    <div id="block" @drag="blockDrag" draggable="true" ref="block"></div>
  </section>
</template>

<script>
export default {
  name: "DragComponentOne",
  setup() {

  },
  data() {
  },
  methods: {
    slotDragEnter(e) {
      console.log(e, this.$refs.slot.appendChild,this.$refs.block);
      this.$refs.slot.style.border = `2px solid red`;
      this.$refs.slot.appendChild(this.$refs.block);
    },
    slotDragLeave(e) {
      console.log(e);
      this.$refs.slot.style.border = `2px solid black`;
    },
    blockDrag(e) {
      e
      // console.log(e);
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
  top: 20%;
  left: 20%;
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
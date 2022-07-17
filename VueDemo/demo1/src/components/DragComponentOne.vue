<template>
  <section class="drag-of-container" id="drag-of-container">
    <div id="slot" @dragenter="slotDragEnter" @dragover="slotDragOver" @drop="slotDrop" @dragleave="slotDragLeave"
      draggable="true" ref="slot">
    </div>
    <div id="block" @drag="blockDrag" @dragover="blockDragOver" @drop="blockDrop" draggable="true" ref="block"></div>
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
      console.log(e);
      this.$refs.slot.style.border = `2px solid red`;
    },
    slotDragOver(e) {
      // 不在dragOver事件阻止默认行为 drop事件无法生效
      e.preventDefault();
    },
    blockDragOver(e) {
      e.preventDefault();
    },
    blockDrop() {
      const container = document.getElementById("drag-of-container");
      const slot = document.getElementById("slot");
      const block = document.getElementById("block");
      block.style.position = "fixed";
      slot.removeChild(block);
      container.append(block)
    },
    slotDrop(e) {
      console.log(e, this.$refs.slot.hasChildNodes());
      const slot = document.getElementById("slot");
      const block = document.getElementById("block");
      block.style.position = "static";
      slot.append(block)
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
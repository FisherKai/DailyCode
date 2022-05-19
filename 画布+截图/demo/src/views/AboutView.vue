<template>
  <section>
    <section>
      <canvas
        ref="canvasP"
        width="1200"
        height="600"
        style="border: 1px solid #000000"
      ></canvas>
    </section>
    <el-button @click="cut">截图</el-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      canvas: "",
      ctx: "",
    };
  },
  methods: {
    cut() {
      const image = new Image();
      image.src = this.canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.setAttribute("download", "截图");
      image.src = this.canvas.toDataURL("image/png");
      image.onload = () => {
        link.href = image.src;
        link.click();
      };
    },
    mouseHandler(e) {
      if (e.type === "mousedown") {
        this.ctx.beginPath();
        this.ctx.moveTo(e.offseeeetX, e.offsetY);
        this.canvas.addEventListener("mousemove", this.mouseHandler);
        this.canvas.addEventListener("mouseup", this.mouseHandler);
      } else if (e.type === "mousemove") {
        this.ctx.lineTo(e.offsetX, e.offsetY);
        this.ctx.stroke();
      } else if (e.type === "mouseup") {
        this.canvas.removeEventListener("mousemove", this.mouseHandler);
        this.canvas.removeEventListener("mouseup", this.mouseHandler);
      }
    },
    init() {
      this.canvas = this.$refs.canvasP;
      this.ctx = this.canvas.getContext("2d");
      this.ctx.strokeStyle = "red";
      this.canvas.addEventListener("mousedown", this.mouseHandler);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
</style>
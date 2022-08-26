<template>
  <div class="hello">
    <button @click="downloadFile">下载模板</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    downloadFile() {
      const a = document.createElement('a');
      a.href = '/little-sky-sky.xlsx';
      a.download = '小天天模板.xlsx';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

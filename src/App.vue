<!--
 * @Author: czf
 * @Date: 2023-06-29 10:37:26
 * @LastEditors: czf
 * @LastEditTime: 2023-06-29 11:19:50
 * @FilePath: App.vue
 * @Description:
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      treeData: "",
    }
  },
  methods: {
    async treeList() {
      return fetch('http://localhost:3300/treeInfo').then(res => res.json()).then(res => {
        this.treeData = res.data
      })
    },
    onSelect(name) {
      console.log(name)
    }
  },
  mounted() {
    this.treeList().then(() => {
      console.log(this.treeData)
      this.onSelect('123')
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: "Hello Rabbit",
    };
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>

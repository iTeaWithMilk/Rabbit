<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["msg"],
};
</script>

<style scoped lang="less">
div {
  width: 100%;
  height: 100%;
  position: relative;
  h1 {
    position: absolute;
    color: tomato;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

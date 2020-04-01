<template>
  <div>
    <div>
      <p>{{ count }}</p>
      <button @click="count+=1">增加</button>
      <p>{{ name }}</p>
      <input type="checkbox" v-model="checked" />
      <p>{{ checked }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyComponent",
  data() {
    return {
      count: 0,
      checked: false
    };
  },
  props: ["name"]
};
</script>
<style>
</style>
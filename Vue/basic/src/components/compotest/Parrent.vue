<template>
  <div>
    <h1>Parrent</h1>
    <br>
    <later v-bind:title="title" v-bind:content="content"/>
  </div>
</template>

<script>
import later from "@/components/compotest/Child.vue";
export default {
  components: {
    later
  },
  data: () => ({
    title: "This is Title",
    content: "This is some text content"
  })
};
</script>

<style>
</style>

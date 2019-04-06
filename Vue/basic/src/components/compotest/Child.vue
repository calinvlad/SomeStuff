<template>
  <div>
    <h1>Child</h1>
    <hr>
    <p>{{header}}</p>
    <p>{{paragraph}}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "content"],
  data: function() {
    return {
      header: this.title,
      paragraph: this.content
    };
  }
};
</script>

<style>
</style>

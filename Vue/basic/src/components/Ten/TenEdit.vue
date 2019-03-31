<template>
  <div>
    <button @click="increment">{{ quantity}}</button>
    {{name}}
  </div>
</template>

<script>
export default {
  name: "dinoCustom",
  props: ["name", "initialQuantity", "index"],
  data: function() {
    this.$emit("increment", this.initialQuantity);
    return {
      quantity: this.initialQuantity
    };
  },
  methods: {
    increment: function() {
      this.quantity += 1;
      this.$emit("increment", 1);
    }
  }
};
</script>

<style>
</style>

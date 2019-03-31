<template>
  <div id="card">
    <header>Dinosaurs</header>
    <button v-on:click="addDinosaur">Add {{ amount }} Dinosaur</button>
    <input type="number" v-model="amount" v-on:keyup.enter="addDinosaur">
    <p>You have a {{ total }} of dinosaurs</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      amount: null,
      total: 0
    };
  },
  methods: {
    addDinosaur: function() {
      this.total += parseInt(this.amount);
      return (this.amount = null);
    }
  }
};
</script>
<style>
body {
  padding: 2em;
  font-family: sans-serif;
}

#card {
  border: 2px solid Gray;
  border-radius: 10px;
}

#card header {
  display: block;
  border-radius: 8px 8px 0 0;
  background: orange;
  padding: 10px;
  color: white;
  font-size: 1.5em;
}

#card div,
#card p,
form {
  padding: 1em;
}

#card ul {
  list-style: none;
  margin: 0;
  padding: 0 1em 1em;
}

#card ul li {
  padding: 0.25em;
  border: 1px solid gray;
  margin: 0.5em 0;
  border-radius: 3px;
}
</style>

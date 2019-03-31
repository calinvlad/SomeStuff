<template>
  <div id="card">
    <header>{{ title }}</header>
    <div>
      <input id="itemForm" v-on:keypress.enter="addItem">
      <button @click="addItem">Add Dinosaurs</button>
    </div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <h4>{{ item.text | capitalize }}</h4>
        <span>The {{ item.text | undercase }} weighs {{ item.weight | undercase }}.</span>
        <a href="#">{{ item.text | undercase | url }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      title: "Dinosaurs",
      items: [
        { text: "veciloraptor", weight: "15kg" },
        { text: "Stegozaur", weight: "1500kg" },
        { text: "sriceraptor", weight: "6000kg" }
      ]
    };
  },
  methods: {
    addItem: function() {
      var input = document.getElementById("itemForm");
      if (input.value !== "") {
        this.items.push({
          text: input.value
        });
      }
      input.value = "";
    },
    deleteItem: function(index) {
      console.log("Index: ", index);
      this.items.splice(index, 1);
    }
  },
  filters: {
    capitalize: function(value) {
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    undercase: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toLowerCase();
    },
    url: function(value) {
      if (!value) return "";
      value = value.toString();
      return "https://en.wikipedia.com/" + value;
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

#card div {
  padding: 1em;
}
</style>

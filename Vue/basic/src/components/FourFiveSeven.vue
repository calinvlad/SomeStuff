<template>
  <div id="card">
    <header>{{ title }}</header>
    <input id="itemForm" v-model="input" @keypress.enter="addItem">
    <button @click="addItem">{{ buttonText }}</button>
    <template v-if="items.length > 0">
      <ul>
        <li v-for="item in items" :key="item.text">
          <button v-on:click="item.quantity += 1" v-show="item.quantity < 5">+</button>
          {{ item.quantity }}
          <button
            v-on:click="item.quantity -= 1"
            v-show="item.quantity > 1"
          >-</button>
          {{ item.text }}
          <button v-on:click="removeItem" class="extinct">Make Extinct</button>
        </li>
      </ul>
    </template>
    <p v-else>You have no dinosaurs</p>
    <ul>
      <li>
        Total Dinosaurs: {{ totalDinos }}
        <span>Updated: {{ dinosUpdated }}</span>
      </li>
      <li>
        Total Species: {{ totalSpecies }}
        <span>Updated: {{ speciesUpdated }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data: () => {
    return {
      buttonText: "Add dinosaur",
      title: "Dinosaurs",
      input: "",
      speciesUpdated: 0,
      dinosUpdated: 0,
      items: [
        { text: "Tyrannosaurus", quantity: 5 },
        { text: "Triceratops", quantity: 3 },
        { text: "Stegosaurus", quantity: 6 }
      ]
    };
  },
  watch: {
    input: _.debounce(function() {
      this.buttonText =
        this.input !== "" ? "Add " + this.input : "Add dinosaurs";
    })
  },
  computed: {
    totalDinos: function() {
      this.dinosUpdated += 1;
      var sum = 0;
      var items = this.items;
      for (var i in items) {
        sum += items[i].quantity;
      }
      return sum;
    },
    totalSpecies: function() {
      this.speciesUpdated += 1;
      return this.items.length;
    }
  },
  methods: {
    addItem: function(e) {
      e.preventDefault();
      if (!this.input) return;

      this.items.push({ text: this.input, quantity: 1 });
      this.input = "";
    },
    removeItem: function(item) {
      this.items.splice(item, 1);
    }
  }
};
</script>

<style>
body {
  padding: 2em;
  font-family: sans-serif;
}
.extinct {
  float: right;
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
#card span {
  font-size: 0.75em;
  font-weight: normal;
  font-style: italic;
  float: right;
}
div,
p,
form {
  padding: 1em;
}

ul {
  list-style: none;
  margin: 0;
  padding: 1em;
}
ul li {
  padding: 0.5em;
  border: 1px solid gray;
  margin: 0.5em 0;
  border-radius: 3px;
}

ul li span {
  float: right;
  color: darkred;
  font-weight: 600;
}
</style>

<template>
  <div id="card">
    <header>
      {{title}}
      <span v-on:click="toggle">{{toggleLabel}}</span>
    </header>
    <ul>
      <li v-for="(dino, index) in dinos" :key="index">
        <keep-alive>
          <component
            v-bind:is="currentView"
            v-bind:name="dino.name"
            v-bind:diet="dino.diet"
            v-bind:initialQuantity="dino.quantity"
            v-on:increment="incrementTotal"
          ></component>
        </keep-alive>
      </li>
    </ul>
    <p>Total Dinosaurs: {{total}}</p>
  </div>
</template>

<script>
import dinoEdit from "./TenEdit.vue";
import dinoShow from "./TenShow.vue";

export default {
  components: { dinoEdit, dinoShow },
  data: () => ({
    currentView: "dino-show",
    title: "Dinosaurs",
    input: "",
    total: 0,
    dinos: [
      { name: "Tyrannosaurus", quantity: 5, diet: "Herbivore" },
      { name: "Triceratops", quantity: 4, diet: "Carnivore" },
      { name: "Stegosaurus", quantity: 6, diet: "Carnivore" }
    ]
  }),
  methods: {
    incrementTotal: function(amount) {
      this.total += amount;
    },
    toggle: function() {
      this.currentView =
        this.currentView == "dino-show" ? "dino-edit" : "dino-show";
    }
  },
  computed: {
    toggleLabel: function() {
      return this.currentView == "dino-show" ? "Edit" : "Show";
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
#card p {
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

<template>
  <div id="app">
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checked">This box is {{ checked ? 'checked' : 'unchecked' }}</label>
    <hr>
    <template>
      <label>
        <input type="radio" v-bind:value="dino" v-model="chosen">
        {{ dino }}
      </label>
    </template>
    <span>Favorite: {{chosen}}</span>
    <hr>
    <select v-model="selectedPeriods" multiple>
      <option
        v-for="period in periods"
        :key="period.value"
        v-bind:value="period.value"
      >{{period.name}}</option>
    </select>
    <span>Selected periods value: {{selectedPeriods}}</span>
    <hr>
    <input type="text" v-model="single">
    <p>{{single}}</p>
    <hr>
    <textarea v-model="message" placeholder="Add message"></textarea>
    <p style="white-space: pre;">{{message}}</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      checked: false,
      chosen: "",
      single: "",
      message: "",
      selectedPeriods: [],
      dino: ["Triceraptors", "Velocirapter", "T-Rex"],
      periods: [
        { name: "Triassic", value: 1 },
        { name: "Jurassic", value: 2 },
        { name: "Cretaceous", value: 3 }
      ]
    };
  }
};
</script>

<style>
</style>

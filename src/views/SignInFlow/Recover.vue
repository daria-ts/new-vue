<template>
  <header>
    <h1>Vue Events</h1>
  </header>
  <section id="events">
    <h2>Events in Action</h2>
    <button v-on:click="add(30)">Add</button>
    <button v-on:click="funcName(5)">Remove</button><br />
    <input
      type="text"
      v-on:input="setName($event, 'Зорина')"
      v-on:keyup.enter="confirmName"
    />
    <p>Привет, {{ confirmedName }}!</p>
    <p>Result: {{ counter }}</p>
    <form v-on:submit.prevent="submitForm">
      <input type="text" />

      <button></button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Спасибо!");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    funcName(num) {
      this.counter = this.counter - num;
    }
  },
  name: "Recover"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

form {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $secondary-100;
}

button {
  margin: 1rem;
  width: 100px;
  height: 3rem;
  border-radius: $radi-m;
  border: 1px solid $neutral-200;
}
input {
  height: 2rem;
  margin: 1rem;
  border-radius: $radi-m;
  border: 1px solid $neutral-200;
}
</style>

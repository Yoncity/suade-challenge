<template>

  <h2>Exercise 1</h2>

  <h4>Statement</h4>

  <div class="statement">
    <p>
      Please update the template and logic to ensure you don't get any VueJS warnings in the console, or build warnings.
    </p>

    <p>
      If anything else looks odd to you, feel free to update it for it to match best practices!
    </p>
  </div>

  <h4>Solution</h4>

  <div class="solution">
    <div class="person-wrapper">
      <PersonCard v-for="person in people" :person="person" :key="person._id" @person-click="alertBox"/>
    </div>

    <div class="summary">{{ totalPeople }} persons cards displayed</div>
  </div>

</template>

<script>
  import people from './assets/people.json';

  export default {
    name: 'App',
    data() {
      return {
        people: people,
      };
    },
    methods: {
      alertBox(person) {
        alert('You clicked on ' + person.name);
      },
    },
    computed: {
      totalPeople() {
        return this.people.length;
      },
    },
  };
</script>

<style lang="scss">
  .person-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    place-items: center;
    column-gap: 10px;
    row-gap: 40px;
  }

  .summary {
    text-align: center;
    clear: both;
    margin-top: 40px;
  }

  .statement, .solution {
    border: 1px solid #dedede;
    padding: 0 0.5em;
    min-height: 40px;

    &.solution{
      padding: 10px 0;
    }

    .code {
      color: #434343;
      background-color: #f9f9f9;
      padding: 0 5px;
    }
  }
</style>

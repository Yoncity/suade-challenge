<template>

  <h2>Exercise 4</h2>
  <h4>Statement</h4>
  <div class="statement">
    <p>
      Please update <span class="code">App.vue</span> in order to display a list
      of people aged from 25 to 35 years old, from the youngest to the oldest.
    </p>
    <p>
      Use Vuex store <span class="code">store/store.js</span> to retrieve the list
      of people, use the component <span class="code">components/List.vue</span>
      to display people's age and name, make use of the props and slot, use the
      functions in <span class="code">helpers/helpers.js</span> to filter and sort
      the data.
    </p>
  </div>
  <h4>Solution</h4>
  <div class="solution">
    <p v-show="loading">Loading</p>
    <List :data="people" :sorting="sortByAge" :filtering="filterByAge">
      <template #default="{item}">
        <div class="list-item">
          <p>{{item.age}}</p>
          <p>{{item.name}}</p>
        </div>
      </template>
    </List>
  </div>

</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import List from './components/List.vue';
  import helpers from './helpers/helpers.js';

  export default {
    components: {List},
    created() {
      this.getPeople();
    },
    computed: {
      ...mapGetters({people: 'getAllPeople'}),
      loading() {
        return !this.people.length;
      },
    },
    methods: {
      ...mapActions(['getPeople']),
      sortByAge: helpers.sortByAge,
      filterByAge: helpers.filterByAge,
    },
  };
</script>

<style lang="scss">

  .statement, .solution {
    border: 1px solid #dedede;
    padding: 0 0.5em;
    min-height: 40px;

    .code {
      color: #434343;
      background-color: #f9f9f9;
      padding: 0 5px;
    }
    .list-item{
      display: flex;
      p{
        margin: 0;
        padding: 6px 0;
        &:first-child{
          font-style: italic;
          margin-right: 10px;
        }
        &:last-child{
          font-weight: bold;
        }
      }
    }
  }


</style>

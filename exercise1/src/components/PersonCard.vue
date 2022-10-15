<template>
  <div class="person-card" @click="$emit('personClick', person)">
    <h4>{{ person.name }}</h4>
    <p><b>Age:</b> {{ person.age }}</p>
    <p><b>Eye Color:</b> {{ person.eyeColour }}</p>
    <p><b>Gender:</b> {{ person.gender }}</p>
  </div>
</template>

<script>
  export default {
    name: 'PersonCard',
    props: {
      person: {
        type: Object,
        required: true,
        default: () => ({
          _id: '',
          age: 0,
          eyeColor: '',
          name: '',
          gender: '',
          location: {
            latitude: 0,
            longitude: 0,
          },
          preferences: {
            pet: '',
            fruit: '',
          },
        }),
      },
    },
    emits: {
      personClick: (person) => {
        if (Object.keys(person).length === 0) {
          console.warn('Empty person object received');
          return false;
        }
        return true;
      },
    },
  };
</script>

<style lang="scss" scoped>
.person-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e4e4e4;
  min-width: 100px;
  width: 300px;

  h4,
  p {
    margin: 0;
    padding: 10px;
  }
}
</style>

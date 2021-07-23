<template>
  <div class="container_cards">
    <div :key="image.id" v-for="image in images">
      <Card :image="image" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Cards",
  components: {
    Card,
  },
  props: {
    images: Array,
  },
};
</script>

<style scoped>
.container_cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
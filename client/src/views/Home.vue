<template>
  <div>
    <h1>HOME</h1>
    <Form :method="refresh" />
    <Cards :images="images" :method="refresh" v-show="showCards" />
  </div>
</template>
<script>
import Form from "../components/Form.vue";
import Cards from "../components/Cards.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Form,
    Cards,
  },
  data() {
    return {
      images: [],
      showCards: true,
    };
  },
  async created() {
    const data = await axios.get("http://localhost:3000/api/images/all");

    this.images = data.data;
    if (!this.images) this.showCards = false;
    else this.showCards = true;
  },
  methods: {
    async refresh() {
      const data = await axios.get("http://localhost:3000/api/images/all");

      this.images = data.data;
      if (!this.images) this.showCards = false;
      else this.showCards = true;
    },
  },
};
</script>

<style scoped>
</style>
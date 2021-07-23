<template>
  <div>
    <h1>HOME</h1>
    <Form />
    <Cards :images="images" />
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
    };
  },
  async created() {
    const data = await axios.get("http://localhost:3000/api/images/all");

    this.images = data.data;
  },
};
</script>

<style scoped>
</style>
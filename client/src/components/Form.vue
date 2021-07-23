<template>
  <form class="form_container" @submit="onSubmit">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >URL image direction * (required)</label
      >
      <input
        type="text"
        v-model="url_direction"
        name="url_direction"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Put an image URL"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Image description (optional)</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="description"
        name="description"
        placeholder="Put here the description"
      ></textarea>
    </div>
    <button class="btn btn-success">Create</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      url_direction: "",
      description: "",
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      if (!this.url_direction) {
        alert("Please add a URL");
        return;
      }
      if(!this.validURL(this.url_direction)){
        alert('Please add a valid URL');
        return;
      }

      const json = await axios.post('http://localhost:3000/api/images/create', {
          url_direction: this.url_direction,
          description: this.description
      })

      this.method();

    },
    validURL(str) {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" +
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
          "((\\d{1,3}\\.){3}\\d{1,3}))" + 
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + 
          "(\\?[;&a-z\\d%_.~+=-]*)?" +
          "(\\#[-a-z\\d_]*)?$",
        "i"
      );
      return !!pattern.test(str);
    },
  },
  props:{
    method:{
      type: Function
    }
  },
  mounted(){
    this.method;
  }
};
</script>

<style>
.form_container {
  width: 80%;
  height: 350px;
  margin: auto;
  justify-content: center;
}
</style>
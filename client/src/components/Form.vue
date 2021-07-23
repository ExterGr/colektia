<template>
  <form>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Email address</label
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
        >Example textarea</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="description"
        name="description"
      ></textarea>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      url_direction: "",
      description:""
    };
  },
};
</script>

<style>
</style>
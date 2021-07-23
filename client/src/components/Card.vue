<template>
  <div class="container">
    <img :src="image.url_direction" @error="imageLoadError" />
    <div class="data_content">
        <h6>{{ image.description || "no description" }}</h6>
    </div>
    <div class="button_container">
        <button>modify</button>
        <button>delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: Object,
  },
  data() {
    return {
      default_image:
        "https://f6s-public.s3.amazonaws.com/profiles/1881141_original.jpg",
    };
  },
  methods: {
    imageLoadError() {
        this.image.url_direction = this.default_image;
    },
  },
};
</script>

<style scoped>
.container {
  height: 400px;
  width: 300px;
  border-radius: 10px;
  background-color: #f3f3f3;
  margin-bottom: 1.2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0;
}
.data_content{
    height: 35%;
    padding-top: 10px;
    display: block;
    flex-wrap: wrap;
    text-align: center;
    text-anchor: start;
    overflow: hidden;
}
img {
  height: 50%;
  width: 100%;
  margin: 0;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
}
.button_container{
    height: 10%;
    display: flex;
    justify-content: space-evenly;
}

button{
    border: none;
    border-radius: 5px;
    padding: 0px 5px;
    background-color: #fa5e62;
    color: #f3f3f3;
}

button:active{
    background-color: #c4575a;
}

</style>
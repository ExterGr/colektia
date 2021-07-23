<template>
  <div class="container">
    <img :src="image.url_direction" @error="imageLoadError" />
    <div class="data_content" v-show="!isModifying">
      <h6>{{ image.description || "no description" }}</h6>
    </div>
    <div class="data_content" v-show="isModifying">
      <p>Description:</p>
      <input type="text" v-model="descriptionModify" />
      <p>URL direction:</p>
      <input type="text" v-model="urlDirectionModify" />
    </div>
    <div class="button_container" v-show="!isModifying">
      <button @click="handleModify">modify</button>
      <button @click="deleteImage">delete</button>
    </div>
    <div class="button_container" v-show="isModifying">
      <button @click="cancelModify">cancel</button>
      <button @click="confirmModify">confirm</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Card",
  props: {
    image: Object,
    method: {
      type: Function,
    },
  },
  data() {
    return {
      default_image:
        "https://f6s-public.s3.amazonaws.com/profiles/1881141_original.jpg",
      isModifying: false,
      descriptionModify: this.image.description,
      urlDirectionModify: this.image.url_direction,
    };
  },
  methods: {
    imageLoadError() {
      this.image.url_direction = this.default_image;
    },
    async deleteImage() {
      let res = confirm("Are you sure you want delete this image?");
      if(res){
        await axios.delete(
          `http://localhost:3000/api/images/delete/${this.image.id}`
        );
        this.method();
      } else {
        return;
      }
    },
    handleModify() {
      this.isModifying = !this.isModifying;
    },
    cancelModify() {
      this.descriptionModify = this.image.description;
      this.urlDirectionModify = this.image.url_direction;
      this.isModifying = !this.isModifying;
    },
    async confirmModify() {
      if (
        this.descriptionModify !== this.image.description ||
        this.urlDirectionModify !== this.image.url_direction
      ) {
        let result = confirm("Are you sure you want to modify the image?");
        if (result) {
          this.isModifying = !this.isModifying;
          await axios.put(
            `http://localhost:3000/api/images/update/${this.image.id}`,
            {
              url_direction: this.urlDirectionModify,
              description: this.descriptionModify,
            }
          );
          this.method();
          alert("Modified image!");
          return;
        } else {
          alert("Modification canceled!");
        }
      }
      this.isModifying = !this.isModifying;
    },
  },
  mounted() {
    this.method;
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
.data_content {
  height: 35%;
  padding: 10px 5px 0px 5px;
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
.button_container {
  height: 10%;
  display: flex;
  justify-content: space-evenly;
}

button {
  border: none;
  border-radius: 5px;
  padding: 0px 5px;
  background-color: #fa5e62;
  color: #f3f3f3;
}

button:active {
  background-color: #c4575a;
}
</style>
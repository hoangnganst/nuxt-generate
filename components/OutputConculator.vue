<template>
  <div class="output-screen">{{ currentVal }}</div>
</template>

<script>
export default {
  name: "OutputConculator",
  props: {
    currentVal: String,
  },
};
</script>

<style>
@font-face {
  font-family: "Digital";
  src: url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot?#iefix")
      format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2")
      format("woff2"),
    url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff")
      format("woff"),
    url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.ttf")
      format("truetype"),
    url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.svg#Digital-7")
      format("svg");
}
.output-screen {
  font-size: 29px;
  font-family: digital;
  color: white;
  text-align: right;
  line-height: 35px;
  background-color: rgba(145, 145, 145, 0.418);
  padding: 3px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>

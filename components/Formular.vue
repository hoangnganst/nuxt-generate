<template>
  <div class="formula-screen">{{ formula }}</div>
</template>

<script>
export default {
  name: "Formular",
  props: {
    formula: String,
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

.formula-screen {
  min-height: 25px;
  font-family: digital;
  font-size: 20px;
  color: orange;
  text-align: right;
  vertical-align: text-top;
  line-height: 20px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  background-color: rgba(145, 145, 145, 0.418);
  padding: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>

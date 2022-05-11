<template>
  <div class="bg-overlay"></div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  created(){
    console.log(this.$i18n.locale)
  }
});
</script>

<style lang="scss">
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page {
  background-color: black;
  color: white;
  min-height: 100vh;
  height: 100%;
}

.bg-overlay {
  background-image: url("assets/images/others/brush.svg");
  background-repeat: no-repeat;
  background-position-y: 100%;
  background-position-x: center;
  pointer-events: none;
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  @include desktop-down{
  }
}
</style>

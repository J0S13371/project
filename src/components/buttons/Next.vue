<template>
  <Button class="button-box">
    {{ ButtonText }}
    <img src="@/assets/images/icons/button-next.png" alt="" class="icon next" />
  </Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SpotifyButton",
  props: {
    ButtonText: String,
  },
});
</script>

<style lang="scss" scoped>
.button-box {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Anton";
  letter-spacing: 0.1rem;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 900;
  height: 48px;
  background-color: #009fe3;
  border: none;
  color: white;
  width: 180px;
  margin-bottom: 80px;
  @include mobile-down {
    margin-top: auto;
    margin-bottom: 0px;
    width: 100%;
  }
  .icon.next {
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    margin-left: 8px;
  }
}
.button-box:hover {
  transition: opacity 0.3s ease-out;
  opacity: 0.8;
  .icon-spotify {
    animation: 0.75s sizepop;
  }
}
</style>

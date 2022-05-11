<template>
  <div class="card" 
    v-bind:style="{ 'background-image': 'url(' + require(`@/assets/images/answers/q2a${index + 1}.png`) + ')'}">
    <span>{{$t(`quiz.questions[${currentQuestion - 1}].answers[${index}].title`)}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Card",
  props: {
    currentQuestion: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: row;
  height: 360px;
  width: 280px;
  background-size: 100% 100%;
  margin: 0px 16px;
  span {
    font-family: "Anton";
    letter-spacing: 0.1rem;
    font-size: 24px;
    align-self: flex-end;
    margin-bottom: 32px;
    margin-left: 24px;
  }
  &:hover{
    cursor: pointer;
    transform: scale(1.05);
  }
}
</style>

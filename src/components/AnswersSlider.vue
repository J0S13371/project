<template>
  <section class="slider-box">
    <div class="slider">
      <div v-for="(answer,index) in en.questions[currentQuestion - 1].answers" :key=index>
        <Card :answerText="answer" :answerImg="answer" :currentQuestion="currentQuestion" :index="index" @click="answerClick(answer, index)" :id="index" :v-class="{active: isActive}"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import en from "../assets/data/translations/en.json";
import { useUserStore } from '@/store/_UserStore';
import Card from "./Card.vue";
export default defineComponent({
  components: { Card },
  name: "AnswersSlider",
  props: {
    currentQuestion: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      en: en.quiz,
      isActive: false
    };
  },
  methods: {
    answerClick(answer: any, index: any){
      const user = useUserStore();
      console.log(index, "INDEX")
      user.selectedAnswer = index.toString();
      console.log(answer)
      this.$emit("answerClick")
      this.isActive = !this.isActive;
      const selectedCard = document.getElementById(index);
      const card1 = document.getElementById('0');
      const card2 = document.getElementById('1');
      const card3 = document.getElementById('2');
      if(card1 != null && card2 != null && card3 != null&& selectedCard != null){
        card1.classList.remove("active")
        card2.classList.remove("active")
        card3.classList.remove("active")
        selectedCard.classList.add("active")
      }
    }
  },
});
</script>

<style lang="scss" scoped>
.slider-box {
  width: 100%;
  .slider {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .active{
      transform: scale(1.1);
    }
  }
}
</style>

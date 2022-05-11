<template>
  <div class="page quiz">
    <Topbar :quiz="true" :currentQuestion="currentQuestion" v-on:previousQuestion="previousQuestion" />
    <section class="page-content">
      <h1 class="question">{{$t(`quiz.questions[${currentQuestion - 1}].question`)}}</h1>
      <div class="answer-box">
        <CounterPicker ref="counter" v-show="currentQuestion == 1" />
        <AnswersSlider class="" v-show="currentQuestion != 1" v-on:answerClick="answerClick" :currentQuestion="currentQuestion" />
        <!-- <AnswersSliderTest class="hideondesktop" v-show="currentQuestion != 1" v-on:answerClick="answerClick" :currentQuestion="currentQuestion" /> -->
      </div>
    </section>
    <NextButton :ButtonText="$t('quiz.next')" @click="nextQuestion"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Topbar from "../components/Topbar.vue";
import AnswersSlider from "../components/AnswersSlider.vue";
import AnswersSliderTest from "../components/AnswersSliderTest.vue";
import CounterPicker from "../components/CounterPicker.vue";
import { useUserStore } from '@/store/_UserStore';
import NextButton from "../components/buttons/Next.vue";
import en from "../assets/data/translations/en.json";
export default defineComponent({
  name: "Quiz",
  data() {
    return {
      currentQuestion: 1 as number,
      totalQuestions: en.quiz.questions.length as number
    };
  },
  components: { Topbar, NextButton, CounterPicker, AnswersSlider, AnswersSliderTest },
  methods: {
    answerClick() {
      // this.currentQuestion++;
    },
    nextQuestion() {
      const user = useUserStore();
      if (this.currentQuestion < this.totalQuestions) {
        if(this.currentQuestion == 1){
          var counterValue = (<HTMLInputElement>document.getElementById('counter')).innerHTML;
          user.answers.push(counterValue)
          this.currentQuestion++;
        }else{
          if(user.selectedAnswer != ""){
            user.answers.push(user.selectedAnswer)
            user.resetAnswer();
            this.currentQuestion++;
          }
        }
      }
      else {
        if(user.selectedAnswer != "")
        user.answers.push(user.selectedAnswer)
        user.resetAnswer();
        this.$router.push("Result");
      }
    },
    previousQuestion() {
      const user = useUserStore();
      user.answers.pop();
      this.currentQuestion--;
    }
  },
});
</script>

<style lang="scss" scoped>
.page.quiz {
  background-image: url("../assets/images/backgrounds/quiz-desktop.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include desktop-up {
    background-image: url("../assets/images/backgrounds/quiz-desktop.png");
  }
  .page-content {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    max-width: 400px;

    @include desktop-up {
      max-width: 620px;
    }

    .question {
      font-family: "Anton";
      letter-spacing: 0.1rem;
      color: white;
      font-size: 36px;
      margin-bottom: 24px;

      @include desktop-up {
        font-size: 56px;
      }
    }

    .answer-box {
      margin-top: 40px;
      margin-bottom: 112px;
    }

  }
  .hideonmobile{
    @include tablet-up{
      display: none;
    }
  }
  .hideondesktop{
    @include tablet-down{
      display: none;
    }
  }
}
</style>

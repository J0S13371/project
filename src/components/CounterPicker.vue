<template>
  <section class="counter-section">
    <div class="arrow left" @click="counterMinus" />
    <div class="box">
      <h1 class="counter" id="counter">{{counterArray[currrentCount]}}</h1>
      <span class="subtitle">{{$t(`quiz.questions[0].counter`)}}</span>
    </div>
    <div class="arrow right" @click="counterAdd" />
  </section>  
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "CounterPicker",
  data() {
    return {
      counterArray: [0, 5, 10, 15, 20, 25, 30],
      currrentCount: 4
    };
  },
  methods:{
    counterAdd(){ 
      if(this.currrentCount < this.counterArray.length - 1){
        this.currrentCount++;
      }
    },
    counterMinus(){
      if(this.currrentCount >= 1){
        this.currrentCount--;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.counter-section{
  display: flex;
  flex-direction: row;
  align-items: center;

  .arrow{
    height: 40px;
    width: 40px;
    margin: 0px 24px;
    cursor: pointer;
    &.left{
      background-image: url("../assets/images/icons/button-minus.svg");
    }
    &.right{
      background-image: url("../assets/images/icons/button-add.svg");
    }
    &:hover{
      opacity: 0.7;
    }
  }
  .box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 160px;
    border: solid #009FE3 6px;

    .counter{
      font-size: 96px;
      font-weight: 400;
    }

    .subtitle{
      text-transform: uppercase;
    }
  }
}
</style>

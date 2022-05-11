<template>
  <section class="topbar">
    <section class="left">
      <div v-show="quiz" class="button previous" v-if="currentQuestion > 1" @click="previous">
        <img src="@/assets/images/icons/button-back.png" alt="previous" />
      </div>
      <div v-show="result" class="button retry" @click="retry">
        <img src="@/assets/images/icons/button-retry.png" alt="retry" />
        <span class="hideonmobile">{{$t(`result.retry`)}}</span>
      </div>
    </section>
    <section class="center">
    </section>
    <section class="right">
      <h3 v-show="quiz">{{ currentQuestion }} — {{$t(`quiz.totalQuestions`)}}</h3>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Topbar",
  props: {
    quiz: Boolean,
    result: Boolean,
    currentQuestion: {
      type: Number,
      default: 1,
      required: true
    },
  },
  data() {
    return {};
  },
  methods: {
    retry() {
      this.$router.push("/");
    },
    previous(){
      this.$emit("previousQuestion")
    }
  },
});
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 160px;
  max-width: 800px;

  .left {
    margin-left: 24px;
    width: 33%;
    .button {
      margin-right: auto;
      display: flex;
      align-items: center;
      span {
        color: white;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
      img {
        cursor: pointer;
        height: 40px;
        width: 40px;
        margin-right: 12px;
      }
      &.retry img {
        &:hover {
          animation: spin 0.75s forwards;
          opacity: 0.8;
        }
      }
    }
  }

  .center {
    width: 33%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .shimano {
      margin: 0px 10px;
      width: 104px;
      height: 24px;
    }
    .warner {
      margin: 0px 10px;
      width: 68px;
      height: 28px;
    }
  }
  .right {
    width: 33%;
    color: white;
    text-align: right;
    padding-right: 24px;
    h3{
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
    }
  }
}

.hideonmobile{
  @include tablet-down{
    display: none;
  }
}
</style>

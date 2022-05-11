<template>
  <div >
    <swiper :modules="modules" :pagination="{cliclable: true}" class="mySwiper">
    <swiper-slide>
      <Card :currentQuestion="1" :index="0" @click="answerClick(answer, index)" :id="0" :v-class="{active: isActive}"/>
    </swiper-slide>
    <swiper-slide>
      <Card :currentQuestion="1" :index="1" @click="answerClick(answer, index)" :id="1" :v-class="{active: isActive}"/>
    </swiper-slide>
    <swiper-slide>
      <Card :currentQuestion="1" :index="2" @click="answerClick(answer, index)" :id="2" :v-class="{active: isActive}"/>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
  import 'swiper/swiper-bundle.min.css';
  // import "swiper/css/pagination";
  import "swiper/modules/pagination/pagination.min.css"
  import { Pagination } from "swiper";
  import Card from "./Card.vue";
export default {
  name: 'FrontendAnswerSlider',
  components: {
    Swiper,
    SwiperSlide,
    Card
  },
  data() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

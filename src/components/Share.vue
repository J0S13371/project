<template>
  <section class="share-box">
    <div class="top">
      <span>{{$t(`result.share`)}}</span>
    </div>
    <div class="bottom">
      <div class="icon facebook" @click="facebook" />
      <div class="icon whatsapp" @click="whatsapp"/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Card",
  data() {
    return {
      shareText: this.$t("result.shareText"),
      shareLink: `${window.location.origin}/${
        window.location.pathname.split("/")[1]
      }/`,
    };
  },
  methods: {
    facebook() {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        this.shareLink
      )}`;
      window.open(
        url,
        "facebook",
        `width=550,height=450,scrollbars=yes,toolbar=no,location=yes`
      );
    },
    whatsapp() {
      const url = `https://wa.me/?text=${encodeURIComponent(
        `${this.shareText} ${this.shareLink}`
      )}`;
      window.open(url);
    }
  },
});
</script>

<style lang="scss" scoped>
.share-box{
  display: flex;
  flex-direction: column;
  .top{
      margin-bottom: 12px;
  }
  .bottom{
    display: flex;
    flex-direction: row;
    .icon{
      border-radius: 50%;
      cursor: pointer;
      width: 40px;
      height: 40px;
      margin-right: 24px;
      border: 2px solid white;
      background-position: center;
      background-repeat: no-repeat;
      &:hover{
        border: 2px solid #009FE3;
      }
      &.facebook{
        background-image: url("../assets/images/icons/facebook.png");
        background-size: 10px;
      }
      &.whatsapp{
        background-image: url("../assets/images/icons/whatsapp.png");
        background-size: 16px;
      }
    }
  }
}
</style>

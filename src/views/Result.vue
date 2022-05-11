<template>
  <div class="page result">
    <Topbar :result="true" />
    <section class="page-content">
      <div class="side left">
        <div class="title-box">
        <h1 class="title">{{$t(`result.title`)}}</h1>
        </div>
        <p class="description">{{$t(`result.description`)}}</p>
        <Share class="share" />
      </div>
      <div class="side right">
          <iframe
            class="iframe"
            :src="recommendedPlaylist"
            width="100%"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Topbar from "../components/Topbar.vue";
import SpotifyButton from "../components/buttons/Spotify.vue";
import * as SpotifyHelper from "@/utils/spotify";
import Share from "../components/Share.vue";
import { useUserStore } from '@/store/_UserStore';

export default defineComponent({
  name: "Result",
  data() {
    return {
      termsOptin: false as boolean,
      commercialOptin: 0 as number,
      loginError: false as boolean,
      recommendedPlaylist: "" as string
    };
  },
  components: { SpotifyButton, Topbar, Share },
  async created(){
    await this.resultPlaylist()
  },
  methods: {
    async resultPlaylist(){
      const playlists =  ['3gXVeCMICwDOFlwUKVvaeH', '1kUtQcY5LkeUAU4VinMY4B', '2Hkr01HG2tiuInTFyitOoS', '1MzUcnbE4w3TmLbLTEVlGp'];
      const user = useUserStore();
      const playlistNumber = Number(user.answers[1]);
      const test1 = await SpotifyHelper.getAccount(user.accessToken.toString())
      console.log("Account Data", test1)
      console.log("Country: ", test1.country)
      console.log("Mail: ", test1.email)
      const test2 = await SpotifyHelper.getPlaylist('1kUtQcY5LkeUAU4VinMY4B', user.accessToken)
      console.log("TESTPlaylist", test2.tracks.items)
      this.recommendedPlaylist = `https://open.spotify.com/embed/playlist/${playlists[playlistNumber]}?utm_source=generator&theme=0`;
    }

  },
});
</script>

<style lang="scss" scoped>
.page.result {
  background-image: url("../assets/images/backgrounds/quiz-desktop.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @include tablet-down {
    background-color: #1c1c1b;
    background-image: linear-gradient(
        to bottom,
        rgba(245, 246, 252, 0),
        rgb(22, 22, 22) 320px
      ),
      url("../assets/images/backgrounds/result-mobile.png");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
  }
}

.page-content {
  display: flex;
  height: 100%;
  width: 100%;
  color: white;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @include desktop-up {
    max-width: 800px;
    flex-direction: row;
    margin-top: 120px;
  }
  .side {
    height: 100%;
    width: 50%;
    @include desktop-down{
      width: 100%;
    }
    &.left{
      display: flex;
      flex-direction: column;
      @include desktop-down{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .title-box{
        border: solid 6px #009FE3;
        height: 240px;
        width: 160px;
        margin-bottom: 32px;
        .title{
          position: absolute;
          font-family: 'Anton';
          letter-spacing: 0.1rem;
          font-size: 48px;
          max-width: 100px;
          margin: 16px 0px 0px 16px;
          line-height: 48px;
        }
      }
      .description{
        margin-bottom: 40px;
        width: 80%;
        @include desktop-up {
          margin-bottom: 32px;
          width: 320px;
        }
      }
      .share{
        @include desktop-down{
          display: none;
        }
      }
    }
    &.right{
      height: 100%;
      display: flex;
      justify-content: center;
      .iframe{
        background-color: rgba(83, 83, 83, 0.2);
        height: 480px;
        width: 410px;
        @include desktop-down{
          height: 340px;
          width: 100%;
          margin: 0px 24px;
          max-width: 420px;
        }
      }
    }
  }
}
</style>

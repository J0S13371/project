<template>
  <div class="page home">
    <Topbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Topbar from "@/components/Topbar.vue";
import SpotifyButton from "@/components/buttons/Spotify.vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      termsOptin: false as boolean,
      commercialOptin: 0 as number,
      loginError: false as boolean,
      token: ""
    };
  },
  components: { SpotifyButton, Topbar },
  methods: {},
});
</script>

<style lang="scss" scoped>
.page.home {
  background-image: url("../assets/images/backgrounds/mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include desktop-up {
    background-image: url("../assets/images/backgrounds/desktop.png");
    height: 100vh;
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
    margin: 0px 12px;
    @include desktop-up {
      max-width: 620px;
      margin: 0px 0px;
    }

    .logo {
      display: block;
      width: 180px;
      margin-bottom: 48px;

      @include desktop-up {
        width: 240px;
      }
    }

    .title {
      font-family: 'Anton';
      color: white;
      font-size: 36px;
      line-height: 40px;
      margin-bottom: 12px;

      @include desktop-up {
        max-width: 320px;
      }
    }

    .description {
      color: white;
      margin-bottom: 32px;
      font-size: 14px;
      line-height: 20px;

      @include desktop-up {
        max-width: 480px;
      }
    }

    .spotifyButton{
      margin-bottom: 80px;
    }

    .checkboxes-holder {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 44px;
      font-size: 12px;

      .checkbox-holder {
        text-align: left;
        display: block;
        position: relative;
        cursor: pointer;
        user-select: none;
        color: #ffffff;
      }

      input {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
      }

      .checkbox {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
      }

      .checkbox-holder:hover input~.checkbox {
        transition: background-color 0.3s ease-in-out;
        background-color: rgb(214, 214, 214);
      }

      .checkbox-holder input~.checkbox {
        background-color: #ffffff;
      }

      .checkbox:after {
        content: "";
        position: absolute;
        display: none;
      }

      .checkbox-holder input:checked~.checkbox:after {
        display: block;
      }

      .checkbox-holder .checkbox:after {
        margin: 4px;
        left: 2px;
        bottom: 0px;
        width: 6px;
        height: 12px;
        border: solid rgb(0, 0, 0);
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      .checkbox-description {
        display: block;
        margin-left: 20px;
        margin-left: 32px;
      }
    }
  }

  .footer {
    cursor: pointer;
    margin-top: auto;
    margin-bottom: 32px;
    color: white;
    opacity: 0.7;
    font-size: 12px;

    &:hover {
      text-decoration: underline;
      color: #009FE3;
      opacity: 1;
    }
  }
}
</style>

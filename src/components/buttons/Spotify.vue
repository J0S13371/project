<template>
  <Button class="button-spotify" @click="spotifyLogin">
    <img
      src="@/assets/images/icons/spotify.png"
      alt=""
      class="icon-spotify"
    />
    {{ ButtonText }}
  </Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { useUserStore } from "@/store/_UserStore";
export default defineComponent({
  name: "SpotifyButton",
  props: {
    ButtonText: {
      type: String,
      required: true,
    },
    optin: {
      type: Boolean,
      required: true,
    },
    clientId: {
      type: String,
      required: true,
    },
    redirectRouter: {
      type: String,
      required: true,
    },
    scope: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      token: "",
      optin: this.optin,
      clientId: this.clientId,
      redirectRouter: this.redirectRouter,
      scope: this.scope,
    };
  },
  mounted() {
    this.token = window.location.hash.substr(1).split("&")[0].split("=")[1];
    if (this.token) {
      window.opener.spotifyCallback(this.token);
      this.$router.push({ name: this.redirectRouter });
    }
  },
  methods: {
    spotifyLogin() {
      if(this.optin == true){
        const user = useUserStore();
        const redirectUri = window.location.href;
        let popup = window.open(
          `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${this.scope}&show_dialog=true`,
          "Login with Spotify",
          "width=800,height=600"
        );
        window.spotifyCallback = async (payload: any) => {
          popup?.close();
          user.accessToken = payload;
          const getAccount = await this.getAccount(payload);
          user.spotifyUser = getAccount;
          this.$router.push({ name: this.redirectRouter });
        }
      };
    },
    async getAccount(token: string) {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error: any) {
        if (error.response) {
          return error.response;
        } else {
          console.log("Error", error.message);
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.button-spotify {
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
  width: 240px;

  .icon-spotify {
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  &.disabled {
    background-color: #174a5f;
  }
}

.button-spotify:hover {
  transition: opacity 0.3s ease-out;
  opacity: 0.7;

  .icon-spotify {
    animation: 0.75s sizepop;
  }
}
</style>

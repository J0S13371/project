import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      currentQuestion: 0 as number,
      answers:[] as Array<String>,
      accessToken: "" as String,
      spotifyUser: "" as any,
      optin: false as boolean,
      selectedAnswer: "" as String,
    }
  },
  actions: {
    resetAnswer(){
      this.selectedAnswer = "";
    }
  },
  getters: {

  }  
})

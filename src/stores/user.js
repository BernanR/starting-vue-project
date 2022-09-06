import { defineStore } from "pinia";


export const useUserStore = defineStore('user', {
    state: () => {
        return {
            data: {
                name: "Bernan",
                email: "alves.bernan@gmail.com"
            },
            token: ""
        }
    }
})
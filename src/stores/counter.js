import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => { return {count: 0} },
    actions: {
        increaseCount() {
            console.log("increment...")
            this.count++
        },
        decreaseCount() {
            this.count--
        }
    },
    getters: {
        oddOrEven() {
            if (this.count % 2 === 0) return 'Even'
            return 'Odd'
        }
    }
})
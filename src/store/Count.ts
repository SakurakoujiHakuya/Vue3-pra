import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
    actions: {
        countAdd(n: number) {
            this.Countsum += n
        },
        countSub(n: number) {
            this.Countsum -= n
        }
    },
    state() {
        return {
            Countsum: 0
        }
    },
    getters: {
        bigSum(state) {
            return state.Countsum * 10
        }
    }
})
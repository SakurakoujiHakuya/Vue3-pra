import { ref } from 'vue';

export default function (a?: number) {
    let sum = ref(0)
    if (a)
        sum.value += a
    function addSum(b: number) {
        sum.value += b
    }
    function subSum(b: number) {
        sum.value -= b
    }
    return { sum, addSum, subSum }
}

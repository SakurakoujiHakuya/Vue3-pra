import { ref } from 'vue';

export default function (a?: number) {
    let sum = ref(0)
    if (a)
        sum.value += a
    function addSum() {
        sum.value++
    }
    return { sum, addSum }
}

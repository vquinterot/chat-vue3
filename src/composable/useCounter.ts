import { computed, ref } from "vue"

const counter = ref(10);

export const useCounter = (initialValue: number) => {
    // const counter = ref(initialValue);
    return {
        counter,
        squareCounter: computed(() => counter.value + counter.value),
    }
}
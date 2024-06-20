<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>

        <div>
            <button class="btn" @click="counter++">+1</button>
            <button class="btn" @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composable/useCounter';

// const props = defineProps({
//     valueInicial: {type:Number, required:true}
// })
interface Props {
    valueInicial?: number;
} 
// // const props = defineProps<{valueInicial:Number;}>();
const props = defineProps<Props>();
// const counter = ref(props.valueInicial ?? 5)
// const squareCounter = computed(() => counter.value * counter.value)
const{counter,squareCounter} = useCounter(8);

</script>

<style scope>
    .btn {
        @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2
    }
</style>
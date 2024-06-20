<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>

        <div>
            <button @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts">
import {  defineComponent } from 'vue';
import { useCounter } from '@/composable/useCounter';

export default defineComponent({

    props: {
        valueInicial: {type: Number, required:true }
    },
   setup(props) {
    const{counter,squareCounter} = useCounter(props.valueInicial);

    return{
        counter,
        squareCounter
    }
   }, 
});









// import { computed, ref } from 'vue';

// // const props = defineProps({
// //     valueInicial: {type:Number, required:true}
// // })

// interface Props {
//     valueInicial?: number;
// } 
// // const props = defineProps<{valueInicial:Number;}>();
// const props = defineProps<Props>();

// const counter = ref(props.valueInicial ?? 5)
// const squareCounter = computed(() => counter.value * counter.value)

</script>

<style>
    h1 {
        color:green
    }    
</style>
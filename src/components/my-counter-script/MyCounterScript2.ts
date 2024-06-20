import { computed, defineComponent, ref } from 'vue';
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
import { useCounterStore } from "../store/counterStore";

function CounterValue(){
    const count = useCounterStore((state)=>state.count);
    return (
        <>
        <h1>Count is {count}</h1>
        </>
    )
}

export default CounterValue;
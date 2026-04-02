
import {useCounterStore} from "../store/counterStore.js";

function Counter(){

    const{count,increase, decrease, reset} = useCounterStore();
    return (
        <div>
          <h2>count is :{count}</h2>
          <button onClick={()=>increase}> Add </button>
          <button onClick={()=>decrease}> Subtract</button>
          <button onClick={()=>reset}> Reset </button>
        </div>
    )
}

export default Counter;
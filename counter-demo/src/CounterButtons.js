
// Using Context API
// import { useCounter } from "./CounterContext";

// function CounterButtons() {
//     const { increment, decrement, reset } = useCounter();

//     return (
//         <div>
//             <button onClick={increment}>+</button>
//             <button onClick={decrement}>-</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }


// Using Redux Toolkit
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";

function CounterButtons() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default CounterButtons;
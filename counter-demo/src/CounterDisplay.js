
// Using Context API
// import { useCounter } from "./CounterContext";

// function CounterDisplay() {
//     const { count } = useCounter();
//     return <h2>Count: {count}</h2>
// }


// Using Redux Toolkit
import { useSelector } from "react-redux";

function CounterDisplay() {
    const count = useSelector((state) => state.counter.value);
    return <h2>Count: {count}</h2>
}

export default CounterDisplay;
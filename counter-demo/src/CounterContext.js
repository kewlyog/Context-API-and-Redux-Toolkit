import { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
const CounterContext = createContext();

// 2️⃣ Create a provider component
export function CounterProvider({ children }) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(0);

    return (
        <CounterContext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </CounterContext.Provider>
    );
}

// 3️⃣ Custom hook to use context easily
export function useCounter() {
    return useContext(CounterContext);
}
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>
                count + 1
            </button>
            <button onClick={() => setCount(count - 1)}>
                count - 1
            </button>
            <button onClick={() => setCount(0)}>
                count = 0
            </button>
        </>
    );
}

export default App

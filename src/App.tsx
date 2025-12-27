import {useState} from 'react'
import {Card} from "./components/Card/Card";
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>React TypeScript</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <Card title="Card title" paragraph="Card paragraph"/>
        </>
    )
}

export default App

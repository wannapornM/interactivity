import { useState } from "react"

let initialCounters = [0, 0, 0]

export default function CounterList() {
    const [counters, setCounters] = useState(initialCounters)

    function handleClick(index) {
        const nextCounters = counters.map((c, i) => {
            if (i === index) {
                return c + 1
            } else {
                return c
            }
        })

        setCounters(nextCounters)
    }

    return (
        <ul>
            {counters.map((counter, i) => (
                <li key={i}>
                    {counter}
                    <button onClick={() => handleClick(i)}>+1</button>
                </li>
            ))}
        </ul>
    )
}
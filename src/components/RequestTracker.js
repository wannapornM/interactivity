import { useState } from "react"

export default function RequestTracker() {
    const [pending, setPending] = useState(0)
    const [completed, setCompleted] = useState(0)

    async function handleClick() {
        setPending(pending => pending + 1)
        await delay(3000)
        setPending(pending => pending - 1)
        setCompleted(completed + 1)
    }

    function delay(ms) {
        return new Promise (resolve => {
            setTimeout(resolve, ms)
        })
    }

    return (
        <>
            <h3>Pending : {pending}</h3>
            <h3>Completed : {completed}</h3>
            <button onClick={handleClick}>Buy</button>
        </>
    )
}
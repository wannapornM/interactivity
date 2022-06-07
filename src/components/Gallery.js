import { useState } from "react"

import { sculptureList } from "../utils/data"

export default function Gallery(){
    const [index, setIndex] = useState(0)
    const [showmore, setShowmore] = useState(false)
    
    function handleClick() {
        setIndex(index + 1)
    }
    
    function handleShowmore() {
        setShowmore(!showmore)
    }
    
    let sculpture = sculptureList[index]
    return (
        <>
            <button onClick={handleClick}>Next</button>
            <h2>{sculpture.name} by {sculpture.artist}</h2>
            <h3>({index + 1} of {sculpture.length})</h3>
            <button onClick={handleShowmore}>{showmore? "Hide" : "Show"} detail</button>
            {showmore && <p>{sculpture.description}</p>}
            <img src={sculpture.url} alt={sculpture.alt} />
        </>
    )
}
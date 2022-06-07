import { useState } from "react"

import { sculptureList } from "../utils/data"

export default function Gallery(){
    const [index, setIndex] = useState(0)
    const [showmore, setShowmore] = useState(false)

    let currentIndex = index < sculptureList.length - 1
    
    function handleNextClick() {
        console.log(`before ${index}`)
        if (currentIndex) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
        console.log(`after ${index}`)
    }

    function handlePrevClick() {
        if (index == 0) {
            setIndex(sculptureList.length - 1)
        } else {
            setIndex(index - 1)
        }
    }
    
    function handleShowmore() {
        setShowmore(!showmore)
    }
    
    let sculpture = sculptureList[index]
    return (
        <>
            <button onClick={handleNextClick}>Next</button>
            <button onClick={handlePrevClick}>Prev</button>
            <h2>{sculpture.name} by {sculpture.artist}</h2>
            <h3>({index + 1} of {sculptureList.length})</h3>
            <button onClick={handleShowmore}>{showmore? "Hide" : "Show"} detail</button>
            {showmore && <p>{sculpture.description}</p>}
            <img src={sculpture.url} alt={sculpture.alt} />
        </>
    )
}
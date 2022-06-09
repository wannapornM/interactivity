import { useState } from "react"

const initialList = [
    { id: 0, title: "Big Bellies", seen: false},
    { id: 1, title: "Lunar Landscape", seen: false},
    { id: 2, title: "Terracotta Army", seen: true},
]

export default function BucketList() {
    const [myList, setMyList] = useState(initialList)
    const [yourList, setYourList] = useState(initialList)

    function handleToggleMyList(artworkID, newSeen) {
        const newMyList = myList.map(element => {
            if (element.id == artworkID) {
                return {...element, seen: newSeen}
            } else {
                return element
            }
        })

        setMyList(newMyList)
    }

    function handleToggleYourList(artworkID, newSeen) {
        const newYourList = yourList.map(element => {
            if (element.id == artworkID) {
                return {...element, seen: newSeen}
            } else {
                return element
            }
        })

        setMyList(newYourList)
    }

    return (
        <>
            <h1>Art bucket list</h1>
            <h2>My list of art to see:</h2>
            <ItemList artworks={myList} onToggle={handleToggleMyList}/>
            <h2>Your list of art to see:</h2>
            <ItemList artworks={yourList} onToggle={handleToggleYourList}/>
        </>
    )
}

function ItemList({ artworks, onToggle }) {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input type="checkbox"
                            checked={artwork.seen}
                            onChange={(e) => {onToggle(artwork.id, e.target.checked)}}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    )
}
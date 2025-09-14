import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [transfomers, setTransfomers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3005/transformers")
            .then((res) => res.json())
            .then(transfomers => setTransfomers(transfomers))
    }, [])
    console.log(transfomers)
    return (
        <>
            Hello this is my first React App with Vite!
        </>
    )
}

export default App

import React from "react"
import Form from "./components/Form"
import Box from "./components/Box"
import boxes from "./boxes"
import Counter from "./components/Counter"
import UserCard from "./components/UserCard"
import FormSample from "./components/FormSample"
import Meme from "./components/Meme"
import SimpleUseEffect from "./components/SimpleUseEffect"

function App() {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {
        setSquares(prevSquares => {
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))

    return (
    <>
        <div className="container">
            <h1>Forms</h1>
            <Form />
        </div>
        <div className="container">
            {squareElements}
        </div>
        <div className="container">
            <Counter />
        </div>
        <div className="container">
            <UserCard />
        </div>
        <div className="container">
            <FormSample />
        </div>
        <div className="container">
            <Meme />
        </div>
        <div className="container">
            <SimpleUseEffect />
        </div>
    </>
  );
}

export default App;

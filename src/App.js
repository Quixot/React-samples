import React from "react"
import Form from "./components/Form"
import Box from "./components/Box"
import boxes from "./boxes"
import Counter from "./components/Counter"
import UserCard from "./components/UserCard"
import FormSample from "./components/FormSample"

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
      <Form />
      {squareElements}
      <Counter />
      <UserCard />
      <FormSample />
    </>
  );
}

export default App;

import React, { useRef, useState } from 'react'

const Hooks9 = () => {
  // referencia para gestionar el input
  const inputRef = useRef()

  // el estado, con un valor inicial de []
  const [elements, setElements] = useState([])

  // funciones para añadir y quitar elementos del estado
  const addElement = () => setElements([inputRef.current.value, ...elements])
  const removeElement = i => setElements([...elements.slice(0, i), ...elements.slice(i + 1)])

  // el jsx que gestiona la interfaz
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={addElement}>✏️</button>
      {elements.map((el, i) => (
        <div key={'element' + i}>
          <span>{el}</span>
          <button onClick={() => removeElement(i)}>✔️</button>
        </div>
      ))}
    </div>
  )
}

export default Hooks9;
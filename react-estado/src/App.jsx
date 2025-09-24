import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const aumentar = () => {
    setCount(count + 1);
  };

  const disminuir = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div> 
        <div>
          contador: {count}
        </div>
        <button onClick={aumentar}>Aumentar</button> 
        <button onClick={disminuir}>Disminuir</button>
      </div>
     
    </>
  )
}

export default App

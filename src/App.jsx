import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  console.log('render')
  return (
    <>
      <button onClick={handleClick}>Count is {count}</button>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'

const HookUseEffect = () => {

  // 1 - useEffect sem dependencias
  useEffect(() => {
    console.log("Estou sendo executado ")
  })

  const [number, setNumber] = useState(1)

  const changeSomething = () => {
    setNumber(number + 1)
  }
  // 2 - UseEffect array com dependencias vazio 
  useEffect(() => {
    console.log("Serei executado apenas uma vez.")
  }, [])
  return (
    <div>
      <h2>UseEffect</h2>
      <p>{number}</p>
      <button onClick={changeSomething}>Mudar Número</button>
    </div>
  )
}

export default HookUseEffect
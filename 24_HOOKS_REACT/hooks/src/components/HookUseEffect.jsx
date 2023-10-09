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

  // 3 - Array de dependencias com valores
  const [anotherNumber, setAnotherNumber] = useState(0)

  useEffect(() => {

    if (anotherNumber > 0) {
      console.log("Estou executado apenas quando muda o anotherNumber")
    }

  }, [anotherNumber])

  // 4 - Limpeza do useEffect cleanup
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("Hello world")
  //     setAnotherNumber(anotherNumber + 1)
  //   }, 2000)
  //   // Encerra a função ao mudar de página
  //   return () => clearTimeout(timer)
  // }, [anotherNumber])


  return (
    <div>
      <h2>UseEffect</h2>
      <p>{number}</p>
      <button onClick={changeSomething}>Mudar Número</button>
      <p>AnotherNumber:{anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar o another</button>
    </div>
  )
}

export default HookUseEffect
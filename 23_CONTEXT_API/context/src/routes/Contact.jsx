import React from 'react'
// 3 - alterando valor do contexto
// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

// 5 - contexto mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'


// refatorando hook
import { useCounterContext } from '../hooks/useCounterContext'
const Contact = () => {
  const { counter } = useCounterContext()
  const { color } = useTitleColorContext()
  return (
    <div>
      <h1 style={{ color: color }}>Contact</h1>
      <p>Valor do contador:{counter}</p>
    </div>
  )
}

export default Contact
import React, { useEffect, useLayoutEffect, useState } from 'react'

const HookLayoutEffect = () => {

  const [name, setName] = useState("Algum nome")

  useEffect(() => {
    console.log("2")
    setName("Mudou de novo!")
  }, [])
  useEffect(() => {
    console.log("3")
    setName("Mudou de novo 3!")
  }, [])

  useLayoutEffect(() => {
    console.log("1")
    setName("Outro Nome")
  }, [])

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome:{name}</p>
      <hr />
    </div>
  )
}

export default HookLayoutEffect
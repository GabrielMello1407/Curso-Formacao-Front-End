import HookUseState from "../components/HookUseState"
import HookUserReducer from "../components/HookUseReducer"
import HookUseEffect from "../components/HookUseEffect"
import { SomeContext } from "../components/HookUseContext"
import { useContext } from "react"
import HookUseRef from "../components/HookUseRef"
import HookUseCallback from "../components/HookUseCallback"
import HookUseMemo from "../components/HookUseMemo"
import HookLayoutEffect from "../components/HookLayoutEffect"
import HookUseImperativeHandle from "../components/HookUseImperativeHandle"
import HookCustom from "../components/HookCustom"

const Home = () => {
  const { contextValue } = useContext(SomeContext)
  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUserReducer />
      <HookUseEffect />
      <h2>UseContext</h2>
      <p>Valor do context : {contextValue}</p>
      <hr />
      <HookUseRef />
      <hr />
      <HookUseCallback />
      <hr />
      <HookUseMemo />
      <hr />
      <HookLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  )
}

export default Home
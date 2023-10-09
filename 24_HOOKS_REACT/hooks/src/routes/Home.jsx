import HookUseState from "../components/HookUseState"
import HookUserReducer from "../components/HookUseReducer"
import HookUseEffect from "../components/HookUseEffect"

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUserReducer />
      <HookUseEffect />
    </div>
  )
}

export default Home
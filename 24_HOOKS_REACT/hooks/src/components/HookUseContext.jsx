import { createContext } from "react"

export const SomeContext = createContext()


const HookUseContext = ({ children }) => {
  const contextValue = "Testando context"
  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  )
}

export default HookUseContext
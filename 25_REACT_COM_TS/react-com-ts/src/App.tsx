import { createContext } from 'react'
import './App.css'
import Destructuring, { Category } from './components/Destructuring'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import State from './components/State'

type textOrNull = string | null

type fixed = 'Isso' | 'Ou' | 'Aquilo'
// 9 - context
interface IAppContext{
  language: string
  framework: string
  projects:number
}

export const AppContext = createContext<IAppContext | null>(null)
function App() {

  // 1 - variaveis
  const name: string = "Gabriel"
  const age: number = 30
  const isWorking: boolean = true

  // 2 - funções
  const userGreeting = (name:string):string => {
    return `Olá,${name}`
  }
  const myText: textOrNull = "Tem algum texto aqui"
  const mySecondText: textOrNull = null
  
  // mySecondText = 'Opa'

  const testandoFixed: fixed = 'Isso'
  
  //  9 - context
  const contextValue:IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }
  return (
    <AppContext.Provider value={contextValue}>
      <div>
      <h1>TypeScript com React</h1>
      <h2>Nome:{name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Gabriel" />
      <Destructuring
        title="Primeiro Post"
        content='Algum conteudo'
        commentQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
      />

      <Destructuring
        title="Segundo Post"
        content='Outro conteudo'
        commentQty={20}
        tags={["python"]
        }
        category={Category.P}
      />
      <State />
      {myText && <p>Tem texto na váriavel</p>}
      {mySecondText && <p>Não tem texto na variável</p>}
    </div>
    </AppContext.Provider>
    
  )
}

export default App

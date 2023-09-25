import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {


  return (
    <div className='App'>
      <h1>Form em React</h1>
      <MyForm userName="Gabriel" userEmail="gabrielmello@hotmail.com" />
    </div>
  )
}

export default App

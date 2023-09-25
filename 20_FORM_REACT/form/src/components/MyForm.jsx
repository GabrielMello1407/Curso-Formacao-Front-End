import React, { useState } from 'react'
import './MyForm.css'

const MyForm = ({ userName, userEmail }) => {
  const [name, setName] = useState(userName)
  const [email, setEmail] = useState(userEmail)
  const [bio, setBio] = useState("")
  const [role, setRole] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }
  // 5 - envio de form
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, bio, role)

    // validação

    // envio
    // 7 - Limpar form
    setName("")
    setEmail("")
    setBio("")
    setRole("")
  }
  return (
    <div>
      {/* 1 - Criação do form */}
      {/* 5 - Envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text"
            name="name"
            placeholder='Digite seu nome' onChange={handleName}
            // controlled input
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input type="text" name="email" placeholder='Digite seu e-mail'
            // Simplificando manipulação+
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
        </label>
        {/* 8 - Textarea */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        <label >
          <span>Função do sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
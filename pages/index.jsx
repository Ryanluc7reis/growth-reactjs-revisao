import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

import { useState } from 'react'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLabelClick = () => {
    console.log('hanlde label click')
  }
  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('HANDLE SUBMIT FORM')
    console.log({ email, password })
  }
  const handleChangeInput = (event, onChange) => {
    onChange(event.target.value)
  }

  return (
    <>
      <Title onClick={handleLabelClick}>Formulário de login</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form onSubmit={handleSubmitForm}>
        <Input
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => handleChangeInput(e, setEmail)}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => handleChangeInput(e, setPassword)}
        />
        <p>o email digitado foi: {email}</p>
        <p>a senha digitada foi: {password}</p>
        <Button type="submit">Botão DENTRO do form</Button>
      </form>
      <Button onClick={handleLabelClick}>Botão FORA do form</Button>
      <label>LABEL TESTE</label>
    </>
  )
}

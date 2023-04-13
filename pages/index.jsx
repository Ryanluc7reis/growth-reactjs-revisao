import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {
  const handleLabelClick = () => {
    console.log('hanlde label click')
  }
  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('hanlde submit')
  }
  let email = ''
  const handleChangeInput = (event) => {
    console.log(event.target.value)
    email = event.target.value
  }
  return (
    <>
      <Title onClick={handleLabelClick}>Formulário de login</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form onSubmit={handleSubmitForm}>
        <Input type="text" placeholder="Digite seu email" onChange={handleChangeInput} />
        <p>o email digitado foi: {email}</p>
        <Button type="submit">Botão dentro do form</Button>
      </form>
      <Button onClick={handleLabelClick}>Botão FORA do form</Button>
      <label>LABEL TESTE</label>
    </>
  )
}

import { useState, useCallback, memo } from 'react'

const Button = memo(({ handleClick, name }) => {
  console.log(`Renderiazado botão ${name}`) // para passar algum prop dentro do console.log precisa usar crase ``
  return <button onClick={handleClick}>{name}</button>
})
Button.displayName = 'Memo Button'
// O memo geralmente é usado em componentes
// O callBack geralmente é usado na chamada de funções
// OBS: nao utilizar nenhum desses hooks em algo q se modifica muitas vezes.

export default function MemoizationPage() {
  console.log('Renderizado contador')
  const [contadorUm, setContadorUm] = useState(0)
  const [contadorDois, setContadorDois] = useState(0)

  const memoizedContadorUm = useCallback(() => {
    setContadorUm(contadorUm + 1)
  }, [contadorUm])
  const memoizedContadorDois = useCallback(() => {
    setContadorDois(contadorDois + 1)
  }, [contadorDois])

  return (
    <div>
      <div>
        {contadorUm} - {contadorDois}
      </div>
      <Button handleClick={memoizedContadorUm} name="Botao Um"></Button>
      <Button handleClick={memoizedContadorDois} name="Botao Dois"></Button>
    </div>
  )
}

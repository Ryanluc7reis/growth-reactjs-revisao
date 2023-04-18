import { useState, useRef, useEffect } from 'react'

export default function DebouncePage() {
  const debounce = useRef(null)
  const [text, setText] = useState('')

  const searchData = () => {
    if (!text) return // caso nao altere a variavel 'text',nao retorna nada e segue para as linhas a seguir

    console.log('...searching data...')
    console.log(text)
  }

  useEffect(() => {
    if (debounce.current) clearInterval(debounce.current)
    debounce.current = setTimeout(searchData, 2000) // para acessr o useRef sempre '.current'

    return () => clearInterval(debounce.current) // quando sair da pagina ,limpar e nao chamar mais nada
  }, [text])
  return (
    <div>
      <h4>Debounce:</h4>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

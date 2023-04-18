import useFetch from '../src/hooks/useFetch'

export default function CustomHookPage() {
  const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <h4>Exemplo hook custumizado:</h4>
      {loading && <p>Carreagando...</p>}
      {data?.map(({ id, name }) => (
        <div key={`item-${id}`}>{name}</div>
      ))}
    </div>
  )
}

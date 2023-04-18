import { useState, useEffect } from 'react'

const useFetch = (url) => {
  // HOOKS precisam começar com a letra minuscula como (useFetch)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchData()
  }, [url])

  return [data, loading, error]
}
export default useFetch

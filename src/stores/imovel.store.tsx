import { useState, useEffect } from 'react'
import { Imoveis } from '../components/columns'

export function useImovelStore() {
  const [imoveis, setImoveis] = useState<Imoveis[]>([])

  async function find(query: string) {
    const dados = await fetch(`http://localhost:3333/dados/${query}`)
    const resultado = await dados.json()
    setImoveis(resultado)
  }

  useEffect(() => {
    fetch('http://localhost:3333/dados')
      .then((res) => res.json())
      .then((data) => {
        setImoveis(data)
        console.log(data)
      })
  }, [])

  return { imoveis, find }
}

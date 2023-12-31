import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  const [age, setAge] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) throw new Error('Fact could not be recovered')
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ', 1)[0]

        fetch(`https://api.agify.io/?name=${firstWord}`)
          .then(res => res.json())
          .then(data => {
            const { age: resultantAge } = data
            setAge(resultantAge)
          })
      })
  }, [])

  return (
    <main>
      <h1>Cats App</h1>
      {fact && <p>{fact}</p>}
      {age && <p>{age}</p>}
    </main>
  )
}

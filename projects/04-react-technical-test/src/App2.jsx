import './App.css'
import { useAgeByName } from './hooks/useAgeByName.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App2 () {
  const { fact, refreshRandomFact } = useCatFact()
  const { age } = useAgeByName({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>Cats App</h1>
      {fact && <p>{fact}</p>}
      {age && <strong>{age}</strong>}
      <button onClick={handleClick}>Get new fact</button>
    </main>
  )
}

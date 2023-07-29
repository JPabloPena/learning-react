import './App.css'
import { useAgeByName, useCatFact } from './hooks/useAgeByName'

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
      {age && <p>{age}</p>}
      <button onClick={handleClick}>Get new fact</button>
    </main>
  )
}

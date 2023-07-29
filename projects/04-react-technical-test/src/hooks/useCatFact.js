import { useState, useEffect } from 'react'
import { getRandomFact } from './services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // get fact when page loads
  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}

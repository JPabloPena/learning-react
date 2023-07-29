import { useState, useEffect } from 'react'
import { getAgeByName } from '../services/facts'

// custom hook: use hooks inside
// normal fuction: can't use hooks inside
export function useAgeByName ({ fact }) {
  const [age, setAge] = useState()

  // get age when we already have the fact
  useEffect(() => {
    getAgeByName(fact).then(newAge => setAge(newAge))
  }, [fact])

  return { age }
}

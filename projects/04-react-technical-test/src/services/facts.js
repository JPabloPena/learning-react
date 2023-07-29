const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  if (!res.ok) throw new Error('Fact could not be recovered')
  const data = await res.json()
  const { fact } = data
  return fact
}

// <--- both options are valid ---->
// export const getRandomFact = () => {
//   return fetch(CAT_ENDPOINT_RANDOM_FACT)
//     .then(res => {
//       if (!res.ok) throw new Error('Fact could not be recovered')
//       return res.json()
//     })
//     .then(data => {
//       const { fact } = data
//       return fact
//     })
// }

export const getAgeByName = async (fact) => {
  if (!fact) return
  const firstWord = fact.split(' ', 1)[0]

  const res = await fetch(`https://api.agify.io/?name=${firstWord}`)
  const data = await res.json()
  const { age: resultantAge } = data
  return resultantAge
}

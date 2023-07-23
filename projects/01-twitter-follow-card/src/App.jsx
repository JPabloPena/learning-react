import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernández',
    isFollowing: false
  },
  {
    name: 'Elon Musk',
    isFollowing: false
  }
]

export function App () {
  const messi = { userName: 'leomessi', initialIsFollowing: true }

  return (
    <section className='App'>
      <TwitterFollowCard userName='midudev' initialIsFollowing>
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard userName='pheralb' initialIsFollowing={false}>
        Pablo Hernández
      </TwitterFollowCard>
      <TwitterFollowCard initialIsFollowing={false}>
        Elon Musk
      </TwitterFollowCard>
      <TwitterFollowCard {...messi}>Lionel Messi</TwitterFollowCard>
      {/* Using arrays */}
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}

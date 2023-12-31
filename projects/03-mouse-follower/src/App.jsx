import { useEffect, useState } from 'react'

function FollowMouse () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [circleVisibility, setCircleVisibility] = useState('none')

  useEffect(() => {
    console.log('Effect ', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
      setCircleVisibility('block')
    }

    // clean suscription
    return () => {
      console.log('clean up')
      window.removeEventListener('pointermove', handleMove)
      setCircleVisibility('none')
    }
  }, [enabled])
  return (
    <>
      <div style={{
        display: `${circleVisibility}`,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} follow mouse
      </button>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App

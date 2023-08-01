import './App.css'

function App () {
  return (
    <div className='page'>
      <header>
        <h1>Movies browser</h1>
        <form className='form' />
        <input placeholder='Avengers, Star Wars, The Matrix...' />
        <button type='submit'>Search</button>
      </header>

      <main>
        Movies will appear here!
      </main>
    </div>
  )
}

export default App

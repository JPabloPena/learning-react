import { Square } from './Square.jsx'
import { WinnerModal } from './WinnerModal.jsx'
import { TURNS } from '../constants.js'

export const Board = ({ turn, board, winner, updateBoard, resetGame }) => {
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <button onClick={resetGame}>Reset game</button>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

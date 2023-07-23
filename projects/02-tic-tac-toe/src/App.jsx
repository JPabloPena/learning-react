import { useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS } from './constants'
import { Board } from './components/Board.jsx'
import { checkWinner, checkEndGame } from './logic/board.js'

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
  // if position has something, doesn't update
    if (board[index] || winner) return

    // update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // check winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  return (
    <Board
      turn={turn}
      board={board}
      winner={winner}
      updateBoard={updateBoard}
      resetGame={resetGame}
    />
  )
}

export default App

import { useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS } from './constants'
import { Board } from './components/Board.jsx'
import { checkWinner, checkEndGame } from './logic/board.js'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    console.log({ boardFromStorage })
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    console.log({ turnFromStorage })
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
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

    // save game
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

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

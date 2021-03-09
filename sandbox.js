let board = [
  [1, 2, 3],
  [4, 5, 6]
]

let initialBoard = []

for (let i = 0; i < board.length; i++) {
  initialBoard.push([])
  for (let j = 0; j < board[i].length; j++) {
    initialBoard[i].push(board[i][j])
    // console.log(board[i][j]);
  }
  
}

let test = board 
let gameBoard =  []

for (let i = 0; i < board.length; i++) {
  gameBoard.push([])
  for (let j = 0; j < board[i].length; j++) {
    gameBoard[i].push(board[i][j])
    // console.log(board[i][j]);
  }
  
}
gameBoard[1][2] = 10

console.log(gameBoard)
console.log(initialBoard)
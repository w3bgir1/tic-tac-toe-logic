const calculateWinner = board => {
    return findRowWinner(board) || findRowWinner(onTheSide(board))|| diagonalWinner(board) || null
}

const rowWinner = row => {
   return row.reduce((a, b) => a === b ? a : null)
}

const onTheSide = board => {
    return [0, 1, 2].map(n => board.map(row => row[n]))
} 

const findRowWinner = board => {
    return board
            .map(rowWinner)
            .find(el => el !== null)
}

const diagonalWinner = board => {
    return rowWinner([0, 1, 2].map(n => board[n][n])) || rowWinner([0, 1, 2].map(n => board[2 - n][n]))
}

module.exports = { calculateWinner }
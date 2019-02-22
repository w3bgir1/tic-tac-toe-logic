const { calculateWinner } = require('./calculate-winner')

const gameIsTie = board => {
    return calculateWinner(board) === null && checkSpace(board)
}

const checkSpace = board => {
    return board.reduce((a, b) => {
        return a && b.every(el => el != null) 
    }, true)
}

const unpack = (arr) => {
    return [].concat(...arr);
}
const pack = (arr) => {
    return [
        arr.slice(0, 3),
        arr.slice(3, 6),
        arr.slice(6, 9)
    ]
}

const checkPossibleTies = board => {
    let unpacked = unpack(board)
    const index = unpacked.indexOf(null)
    if (index === -1) {
        return calculateWinner(board) === null
    }

    const withX = unpacked.slice(0)
    withX[index] = 'x'

    const withO = unpacked.slice(0)
    withO[index] = 'o'

    return checkPossibleTies(pack(withX)) && checkPossibleTies(pack(withO))
}

module.exports = { gameIsTie, checkPossibleTies }
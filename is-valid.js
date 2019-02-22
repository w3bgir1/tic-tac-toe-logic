const symbols = [ 'x', 'o', null ]

const isValidBoard = board => {

    if (board.length != 3) return false
    
    return board.reduce((a, b) => {
       return a && (b.length === 3) && b.every(isValidSymbol)
    }, true)
    
}

const isValidSymbol = el => {
    return symbols.includes(el)
}

module.exports = { isValidBoard }
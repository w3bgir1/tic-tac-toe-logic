const isValidTransition = (playerSymbol, from, to) => {
    const fromUnpacked = unpack(from)
    const toUnpacked = unpack(to)
    const allData = fromUnpacked.map((fromEl, i) => {
        const toEl = toUnpacked[i]

        return [fromEl, toEl]
    })

    const changedData = allData.filter(el => el[0] !== el[1])
    
    if (changedData.length !== 1) {
        return false
    }
    if (changedData[0][0] !== null) {
        return false
    }
    
    return changedData[0][1] === playerSymbol
}

const unpack = (arr) => {
    return [].concat(...arr);
}

module.exports = {isValidTransition}
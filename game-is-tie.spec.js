const { gameIsTie, checkPossibleTies } = require('./game-is-tie')

test('Check if the game is a tie - should be true', () => {
    const board = [
        ['o', 'x', 'x'],
        ['x', 'o', 'o'],
        ['x', 'o', 'x']
    ]
    expect(gameIsTie(board)).toBe(true)
})

test('Check if the game is a tie - should be false', () => {
    const board = [
        ['o', 'x', 'x'],
        ['x', null, 'o'],
        ['x', 'o', 'x']
    ]
    expect(gameIsTie(board)).toBe(false)
})

test('Check if the game is a tie (winning case) - should be false', () => {
    const board = [
        ['x', 'x', 'x'],
        ['x', null, 'o'],
        ['x', 'o', 'x']
    ]
    expect(gameIsTie(board)).toBe(false)
})

test('Check if the game could be a tie - should be true', () => {
    const board = [
        ['x', 'o', 'x'],
        ['x', 'o', null],
        ['o', 'x', 'o']
      ]      
    expect(checkPossibleTies(board)).toBe(true)
})

test('Check if the game could be a tie - should be true', () => {
    const board = [
        ['o', 'o', 'x'],
        ['x', 'x', 'o'],
        ['o', null, 'x']
      ]
    expect(checkPossibleTies(board)).toBe(true)
})

test('Check if the game could be a tie - should be true', () => {
    const board = [
        ['x', 'o', 'x'],
        ['o', null, 'x'],
        ['o', 'x', 'o']
      ]
    expect(checkPossibleTies(board)).toBe(true)
})

test('Check if the game could be a tie - should be false - with null', () => {
    const board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
    expect(checkPossibleTies(board)).toBe(false)
})
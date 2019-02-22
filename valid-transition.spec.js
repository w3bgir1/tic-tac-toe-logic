const { isValidTransition } = require('./valid-transition')

test('Check if the transition valid by X player- should be true', () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
      ]
      
      const to = [
        ['x', 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
      ]
    expect(isValidTransition('x', from, to)).toBe(true)
})

test('Check if the transition valid by O player- should be false', () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]
      
      const to = [
        [null, 'x', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]
    expect(isValidTransition('x', from, to)).toBe(false)
})

test('Check if the transition valid by O player by null - should be false', () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]
      
      const to = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', null, 'o']
    ]
    expect(isValidTransition('o', from, to)).toBe(false)
})

test('Check if the transition valid by X player (multiple times) - should be false', () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]
      
      const to = [
        [null, 'o', 'x'],
        ['x', 'x', 'x'],
        ['x', 'o', 'o']
    ]
    expect(isValidTransition('o', from, to)).toBe(false)
})

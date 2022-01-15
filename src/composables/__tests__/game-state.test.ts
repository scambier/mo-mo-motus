import { getLettersColors, LetterPosition } from '../game-state'

describe('The game-state composable', () => {
  const black = LetterPosition.Invalid
  const green = LetterPosition.Perfect
  const yellow = LetterPosition.Misplaced

  test('getLettersColors', () => {
    expect(getLettersColors('daaaa', 'radia')).toEqual([
      yellow,
      green,
      black,
      black,
      green,
    ])

    expect(getLettersColors('daaab', 'radia')).toEqual([
      yellow,
      green,
      yellow,
      black,
      black,
    ])
  })
})

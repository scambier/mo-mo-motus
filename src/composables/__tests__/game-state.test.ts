import { describe, test, expect } from 'vitest'
import { getLettersColors, LetterPosition } from '../game-state'

describe('The game-state composable', () => {
  const b = LetterPosition.Invalid
  const g = LetterPosition.Perfect
  const y = LetterPosition.Misplaced

  test('getLettersColors', () => {
    expect(getLettersColors('daaaa', 'radia')).toEqual([y, g, b, b, g])
    expect(getLettersColors('daaab', 'radia')).toEqual([y, g, y, b, b])
    expect(getLettersColors('ceste', 'steve')).toEqual([b, y, y, y, g])
    expect(getLettersColors('eeaaa', 'stevv')).toEqual([y, b, b, b, b])
  })
})

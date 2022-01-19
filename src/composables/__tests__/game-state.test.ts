import { describe, expect, test } from 'vitest'

import { KeyColor } from '@/constants'

import { getLettersColors } from '../game-state'

describe('The game-state composable', () => {
  const b = KeyColor.Black
  const g = KeyColor.Green
  const y = KeyColor.Yellow

  test('getLettersColors', () => {
    expect(getLettersColors('daaaa', 'radia')).toEqual([y, g, b, b, g])
    expect(getLettersColors('daaab', 'radia')).toEqual([y, g, y, b, b])
    expect(getLettersColors('ceste', 'steve')).toEqual([b, y, y, y, g])
    expect(getLettersColors('eeaaa', 'stevv')).toEqual([y, b, b, b, b])
  })
})

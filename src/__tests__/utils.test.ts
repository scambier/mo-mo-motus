import { describe, expect, test } from 'vitest'

import { numberOfHalfDays } from '../utils'

describe('Utils', () => {
  test('numberOfHalfDays', () => {
    expect(
      numberOfHalfDays(new Date(2022, 0, 1, 10, 0), new Date(2022, 0, 1, 11, 0)),
    ).toEqual(0)
    expect(
      numberOfHalfDays(new Date(2022, 0, 1, 10, 0), new Date(2022, 0, 1, 13, 0)),
    ).toEqual(1)
    expect(
      numberOfHalfDays(new Date(2022, 0, 1, 10, 0), new Date(2022, 0, 3, 10, 0)),
    ).toEqual(4)
    expect(
      numberOfHalfDays(new Date(2022, 0, 1, 10, 0), new Date(2022, 0, 3, 13, 0)),
    ).toEqual(5)
  })
})

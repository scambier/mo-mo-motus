import { differenceInDays } from 'date-fns'
import { ref, watchEffect } from 'vue'

import { getCurrentDate } from '@/utils'

import { lastWelcomeDate, setLastWelcomeDate } from '../storage'
import { isGameover, isWinner } from './game-state'

export const isVisibleModalLoser = ref(false)
export const isVisibleModalWinner = ref(false)
export const isVisibleModalStats = ref(false)

// Automatically toggle winner/loser modals when game is over
watchEffect(() => {
  isVisibleModalWinner.value = isGameover.value && isWinner.value
  isVisibleModalLoser.value = isGameover.value && !isWinner.value
})

const now = getCurrentDate()
/**
 * Defaults to true if the welcome screen was not yet shown today
 */
export const isVisibleModalWelcome = ref(
  differenceInDays(now, lastWelcomeDate) > 0,
)
if (isVisibleModalWelcome.value) {
  setLastWelcomeDate()
}

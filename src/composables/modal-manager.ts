import { getCurrentDate } from '@/utils'
import differenceInDays from 'date-fns/differenceInDays'
import { computed, ref } from 'vue'
import { isGameover, isWinner } from './game-state'
import { lastWelcomeDate, setLastWelcomeDate } from './storage'

export const isVisibleModalLoser = computed(
  () => isGameover.value && !isWinner.value,
)

export const isVisibleModalWinner = computed(
  () => isGameover.value && isWinner.value,
)

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

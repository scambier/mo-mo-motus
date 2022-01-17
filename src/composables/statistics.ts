import { merge } from 'lodash-es'
import { ref, watch } from 'vue'

import * as storage from '@/storage'
import { GameStats } from '@/types'
import { getSessionId } from '@/utils'

import { countTotalGuesses, isWinner } from './game-state'

const K_STATS = 'mts_stats'

export const gameStats = ref<GameStats>(loadStats())
watch(
  gameStats,
  stats => {
    // Automatically save stats in storage when updated
    storage.setItem(K_STATS, JSON.stringify(stats))
  },
  { deep: true },
)

function loadStats(): GameStats {
  const stats: GameStats = {
    bestStreak: 0,
    currentStreak: 0,
    nbGames: 0,
    games: {},
  }
  const loaded = (() => {
    try {
      return JSON.parse(storage.getItem(K_STATS)!)
    }
    catch (e) {
      return {}
    }
  })()
  merge(stats, loaded)
  return stats
}

function setScore(seed: string, won: boolean, score: number): void {
  const stats = gameStats.value
  // Already saved
  if (stats.games[seed]) return

  stats.games[seed] = { score, won }
  if (won && ++stats.currentStreak > stats.bestStreak) {
    stats.bestStreak = stats.currentStreak
  }
  else {
    stats.currentStreak = 0
  }
  ++stats.nbGames
}

export function saveScore(): void {
  setScore(getSessionId(), isWinner.value, countTotalGuesses.value)
}

export type WordInput = {
  word: string
  confirmed: boolean
}

export type GameStats = {
  bestStreak: number
  currentStreak: number
  nbGames: number
  games: { [key: string]: { score: number; won: boolean } }
}

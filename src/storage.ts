import { getSessionId, hashStr } from '@/utils'
import words from '@/words-list'

import { guesses, initSessionForToday } from './composables/game-state'
import { K_LEXICON, K_SESSION, K_WORDS } from './constants'

const toClean = [K_SESSION, K_WORDS]

export function setItem(k: string, v: string): void {
  return localStorage.setItem(k, v)
}
export function getItem(k: string): string | null
export function getItem(k: string, defaultValue: string): string
export function getItem(k: string, defaultValue?: string): string | null {
  try {
    return localStorage.getItem(k) ?? null
  }
  catch (e) {
    return defaultValue ?? null
  }
}

/**
 * Return true if there was an existing session, and it has been reset
 * @param appSessionKey
 * @param force
 * @returns
 */
export function cleanState(appSessionKey: string, force = false): boolean {
  const hasSession = !!getItem(K_SESSION)

  // Do nothing if the session id is unchanged
  if (getItem(K_SESSION) === appSessionKey && !force) {
    return false
  }

  // Clear
  for (const k of toClean) {
    localStorage.removeItem(k)
  }

  // Save the session key
  setItem(K_SESSION, appSessionKey)

  return hasSession && guesses.value.some(o => !!o.word)
}

/**
 * Returns true if the lexicon has changed since last check
 */
export function checkIfNewLexicon(): boolean {
  const hash = hashStr(words.join(''))
  const oldHash = getItem(K_LEXICON) ?? ''
  setItem(K_LEXICON, hash.toString())
  return !!oldHash && hash.toString() !== oldHash
}

export function saveConfirmedWords(words: string[]): void {
  setItem(K_WORDS, JSON.stringify(words))
}

export function loadConfirmedWords(): string[] {
  try {
    const words = getItem(K_WORDS)
    if (words) {
      return (JSON.parse(words) as string[]).filter(o => !!o)
    }
    return []
  }
  catch (e) {
    console.error(e)
    initSessionForToday(true)
    return []
  }
}

export function hasSessionIdChanged(): boolean {
  return !!getItem(K_SESSION) && getItem(K_SESSION) !== getSessionId()
}

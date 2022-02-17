import { getSessionId } from '@/utils'

import { initSessionForToday } from './composables/game-state'
import { K_SESSION, K_WORDS } from './constants'

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
 * @returns
 */
export function cleanState(): boolean {
  const appSessionKey = getSessionId()

  // No current session
  if (!getItem(K_SESSION)) {
    // Remove existing guesses (if any)
    localStorage.removeItem(K_WORDS)
    // Save the session key
    setItem(K_SESSION, appSessionKey)
    return false
  }

  // Outdated session
  if (getItem(K_SESSION) !== appSessionKey) {
    localStorage.removeItem(K_SESSION)
    localStorage.removeItem(K_WORDS)
    setItem(K_SESSION, appSessionKey)
    return true
  }

  // Else, the session exists _and_ is current
  return false
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
    initSessionForToday()
    return []
  }
}

export function hasSessionIdChanged(): boolean {
  return !!getItem(K_SESSION) && getItem(K_SESSION) !== getSessionId()
}

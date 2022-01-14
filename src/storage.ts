import { getCurrentDate, hashStr } from '@/utils'
import words from '@/words-list'
import { guesses, initSessionForToday } from './composables/game-state'

const prefix = 'wordle_'
const K_SESSION = 'session'
const K_WORDS = 'words'
const K_WELCOME = 'lastWelcome'
const K_LEXICON = 'lexiconHash'
const toClean = [K_SESSION, K_WORDS]

/**
 * Return true if there was an existing session, and it has been reset
 * @param appSessionKey
 * @param force
 * @returns
 */
export function cleanState(appSessionKey: string, force = false): boolean {
  const hasSession = !!getItem(K_SESSION)
  console.log(getItem(K_SESSION))
  console.log(appSessionKey)

  // Do nothing if the session id is unchanged
  if (getItem(K_SESSION) === appSessionKey && !force) {
    return false
  }

  // Clear
  for (let i = localStorage.length; i > 0; --i) {
    const key = localStorage.key(i)
    if (key?.startsWith(prefix) && toClean.some(k => key.includes(k))) {
      localStorage.removeItem(key)
    }
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
  return hash.toString() !== oldHash
}

export function saveConfirmedWords(words: string[]): void {
  setItem(K_WORDS, JSON.stringify(words))
}

export function getConfirmedWords(): string[] {
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

export const lastWelcomeDate: Date = (() => {
  try {
    return new Date(getItem(K_WELCOME)!)
  }
  catch (e) {
    return new Date('1970-01-01')
  }
})()

export function setLastWelcomeDate(): void {
  setItem(K_WELCOME, getCurrentDate().toISOString())
}

/**/

function setItem(key: string, val: string): void {
  localStorage.setItem(prefix + key, val)
}

function getItem(key: string): string | null {
  return localStorage.getItem(prefix + key)
}

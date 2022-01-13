import { getCurrentDate, getSessionId } from '@/utils'
import { guesses } from './game-state'
import { showToast } from './toast-manager'

const prefix = 'wordle_'

export function initSessionForToday(force = false): void {
  const appSessionKey = getSessionId()

  const hasSession = !!getItem('session')
  if (getItem('session') === appSessionKey && !force) {
    return
  }

  // Clear
  for (let i = localStorage.length; i > 0; --i) {
    const key = localStorage.key(i)
    if (key?.startsWith(prefix)) {
      localStorage.removeItem(key)
    }
  }

  // Init
  setItem('session', appSessionKey)
  if (hasSession && guesses.value.some(o => !!o.word)) {
    showToast('Un nouveau mot à deviner a été choisi.', 5000)
  }
}

export function saveConfirmedWords(words: string[]): void {
  setItem('words', JSON.stringify(words))
}

export function getConfirmedWords(): string[] {
  try {
    const words = getItem('words')
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
    return new Date(getItem('lastWelcome')!)
  }
  catch (e) {
    return new Date('1970-01-01')
  }
})()

export function setLastWelcomeDate(): void {
  setItem('lastWelcome', getCurrentDate().toISOString())
}

/**/

function setItem(key: string, val: string): void {
  localStorage.setItem(prefix + key, val)
}

function getItem(key: string): string | null {
  return localStorage.getItem(prefix + key)
}

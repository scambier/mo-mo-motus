import { getCurrentDate } from '@/utils'
import { showToast } from './toast-manager'

const prefix = 'wordle_'

export function initSessionForToday(force = false): void {
  const appSessionKey = getCurrentDate()

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
  if (hasSession) {
    showToast(
      "L'app a été mise à jour !<br>Un nouveau mot à deviner a été choisi.",
      7000,
    )
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

function setItem(key: string, val: string): void {
  localStorage.setItem(prefix + key, val)
}

function getItem(key: string): string | null {
  return localStorage.getItem(prefix + key)
}

import { getCurrentDate } from '@/utils'

const prefix = 'wordle_'

export function initSessionForToday(force = false): void {
  const today = getCurrentDate()

  if (getItem('session') === today && !force) {
    return
  }

  // Clear
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith(prefix)) {
      localStorage.removeItem(key)
    }
  }

  // Init
  setItem('session', today)
}

export function saveConfirmedWords(words: string[]): void {
  setItem('words', JSON.stringify(words))
}

export function getConfirmedWords(): string[] {
  try {
    return (JSON.parse(getItem('words')!) as string[]).filter(o => !!o)
  }
  catch (e) {
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

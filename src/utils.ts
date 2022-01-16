import { differenceInHours, endOfDay, startOfDay } from 'date-fns'

import words from './words-list'

export function getCurrentDate(): Date {
  return new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Europe/Brussels' }),
  )
}

export function getSessionId(): string {
  const now = getCurrentDate()
  const localISOTime = now.toISOString().slice(0, -1)
  return localISOTime.slice(0, 10) + (isMorning(now) ? '-0' : '-1')
}

export function isMorning(date: Date): boolean {
  return date.getHours() < 12
}

export function numberOfHalfDays(from: Date, to: Date): number {
  from = isMorning(from) ? startOfDay(from) : endOfDay(from)
  to = isMorning(to) ? startOfDay(to) : endOfDay(to)
  return Math.floor(differenceInHours(to, from) / 12)
}

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function initPRNG(): () => number {
  const seed = getSessionId()
  const hashed = hashStr(seed)
  return mulberry32(hashed)
}

/**
 * https://stackoverflow.com/a/7616484
 * @param val
 * @returns
 */
export function hashStr(val: string): number {
  let hash = 0
  if (val.length === 0) {
    return 0
  }
  for (let i = 0; i < val.length; ++i) {
    hash = (hash << 5) - hash + val[i].charCodeAt(0)
    hash |= 0
  }
  return hash
}

export function normalizeWord(word: string): string {
  return word
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function getLexiconHash(): string {
  return btoa(words.join(''))
}

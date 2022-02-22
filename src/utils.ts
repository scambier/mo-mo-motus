import { differenceInHours, endOfDay, startOfDay } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

import { BXL_TZ, GAME_STARTING_DATE } from './constants'

export function getCurrentDate(): Date {
  return utcToZonedTime(new Date(), BXL_TZ)
}

export function getSessionId(): string {
  const now = getCurrentDate()
  // https://stackoverflow.com/a/28149561
  const tzoffset = now.getTimezoneOffset() * 60000
  const localISOTime = new Date(now.getTime() - tzoffset).toISOString()
  console.log(localISOTime.slice(0, 10))
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

export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length
  let randomIndex: number

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export const random = initPRNG()

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

export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max)
}

export function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function initPRNG(): () => number {
  // Prefix the seed when in dev to avoid spoiling myself while working on it
  const prefix = import.meta.env.DEV ? 'dev-' : ''
  const hashed = hashStr(prefix + GAME_STARTING_DATE)
  return mulberry32(hashed)
}

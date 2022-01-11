import { random } from '@/utils'
import words from '../words'

export function getRandomWord(): string {
  return words[Math.floor(Math.random() * words.length)]
}

export function getWordForToday(): string {
  return words[Math.floor(random() * words.length)]
}

export function doesWordExist(word: string): boolean {
  return words.includes(word)
}

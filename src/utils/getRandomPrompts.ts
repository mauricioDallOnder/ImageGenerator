import { surpriseMePrompts } from '../constants/constants'
import FileSaver from 'file-saver';
export default function getRandomPrompts(prompt: string): string {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]
  if (randomPrompt === prompt) {
    return getRandomPrompts(prompt)
  }
  return randomPrompt
}


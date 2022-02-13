import { ref } from 'vue'

export const toastMessage = ref<string>()
export const toastVisible = ref(false)
const timeout = ref<NodeJS.Timeout>()

/**
 * Adds a toast to the list, that will be destroyed after `duration`
 * @param message
 * @param duration In milliseconds
 */
export function showToast(txt: string, duration: number): void {
  if (timeout.value) {
    clearTimeout(timeout.value)
  }
  // Set toast message
  toastMessage.value = txt
  // Show toast
  toastVisible.value = true
  // Hide toast after duration
  timeout.value = setTimeout(() => {
    toastVisible.value = false
  }, duration)
}

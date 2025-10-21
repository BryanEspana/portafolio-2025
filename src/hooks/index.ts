import { useState } from 'react'

// Hook para manejar el estado de carga
export const useLoading = (initialState: boolean = false) => {
  const [isLoading, setIsLoading] = useState(initialState)

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)

  return { isLoading, startLoading, stopLoading }
}

// Hook para localStorage
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue] as const
}
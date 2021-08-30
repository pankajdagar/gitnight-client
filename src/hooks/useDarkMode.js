import { useEffect, useState } from 'react'
import { usePrefersDarkMode } from './usePrefersDarkMode'

export const useDarkMode = () => {
  const prefersDarkMode = usePrefersDarkMode()
  const [valueProxy, setValueProxy] = useState(() => {
    const value = localStorage.getItem('dark-mode')
    return value ? JSON.parse(value) : undefined
  })

  const setValue = (value) => {
    localStorage.setItem('dark-mode', value)
    setValueProxy(value)
  }

  const enabled = valueProxy === undefined ? prefersDarkMode : valueProxy

  useEffect(() => {
    if (window === undefined) return
    const root = window.document.documentElement
    root.classList.remove(enabled ? 'light' : 'dark')
    root.classList.add(enabled ? 'dark' : 'light')
  }, [enabled])

  return [enabled, setValue]
}

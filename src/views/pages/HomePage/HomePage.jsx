import React from 'react'
import { useDarkMode } from '../../../hooks/useDarkMode'

const OnboardingPage = () => {
  const [isDark, setIsDark] = useDarkMode()
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <label>
      <input
        type="checkbox"
        checked={!!isDark}
        onChange={e => setIsDark(e.target.checked)}
      />
      Dark Mode
    </label>
    <p className="text-yellow-300 dark:text-green-200">Check dark mode</p>
    </div>
  )
}

export default OnboardingPage

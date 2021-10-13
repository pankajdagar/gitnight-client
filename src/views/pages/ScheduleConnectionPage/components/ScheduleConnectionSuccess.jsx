import React from 'react'

const ScheduleConnectionSuccess = () => {
  return (
    <div
      className="min-h-full bg-white max-w-full flex items-center justify-center bg-bottom bg-no-repeat text-center lg:bg-contain flex-col space-y-6 dark:bg-card-color-dark"
      style={{ backgroundImage: `url('/assets/images/dot-pattern.png')` }}
    >
      <div className="text-5xl dark:text-title-dark">🍩 🍰 🍦</div>
      <div>Woohoo!</div>
      <div>
        Sitback relax we’ll notify <br />
        you once we find a match for you.
      </div>
    </div>
  )
}

export default ScheduleConnectionSuccess

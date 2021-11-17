import React from 'react'
import InviteBox from './components/InviteBox'

const Invite = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-auto" src="/assets/images/invite-banner.png" alt="Invite" />
        <div className="absolute top-12 w-full text-center text-white text-4xl font-bold">
          Build the Gitnight <br /> <span className="text-5xl"> community! </span>
        </div>
      </div>
      <h2 className="font-bold text-3xl my-10 dark:text-title-dark">Referral</h2>
      <InviteBox />
    </div>
  )
}

export default Invite

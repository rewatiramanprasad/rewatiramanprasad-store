import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { LuUser2 } from 'react-icons/lu'

async function UserIcon() {
  const user = await currentUser()
  const profileImage = user?.imageUrl
  if (profileImage) {
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    )
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white " />
}

export default UserIcon

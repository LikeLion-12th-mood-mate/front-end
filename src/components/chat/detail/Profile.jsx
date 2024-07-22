import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDesc from './ProfileDesc'

function Profile({counselor}) {
  return (
    <div>
        <ProfileHeader counselor={counselor}/>
        <ProfileDesc counselor={counselor}/>
    </div>
  )
}

export default Profile
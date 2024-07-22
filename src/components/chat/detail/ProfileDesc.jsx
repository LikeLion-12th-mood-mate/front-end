import React from 'react'

function ProfileDesc({counselor}) {
  return (
    <div className='profile-desc-wrap'>
        <p>{counselor?.career}</p>
        <p>{counselor?.Education}</p>
        <p>{counselor?.experience}</p>
        <p>{counselor?.present}</p>
        <p>{counselor?.profession}</p>
        <p>{counselor?.member}</p>
    </div>
  )
}

export default ProfileDesc
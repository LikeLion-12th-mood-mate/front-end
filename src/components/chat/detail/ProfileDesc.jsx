import React from 'react'

function ProfileDesc({counselor}) {
  return (
    <div className='profile-desc-wrap'>
        <p>경력: {counselor?.profile?.employmentHistory}</p>
        <p>학력: {counselor?.profile?.scholarship}</p>
        <p>현재: {counselor?.profile?.currentJob}</p>
        <p>전문분야: {counselor?.profile?.specialization}</p>
        <p>회원: {counselor?.profile?.affiliation}</p>
    </div>
  )
}

export default ProfileDesc
import React from 'react'
import { ProfileContainer, ProfileField} from './styles'

import DownIcon from '../../../assets/svg/caret-down-outline.svg'

function Profile() {
  return (
    <ProfileContainer>
      <ProfileField>
        <img src="https://pbs.twimg.com/profile_images/1286357239259901952/PrUR0M72_400x400.jpg" alt=""/>
        <span>Samuel <img src={DownIcon} alt=""/></span>
      </ProfileField>
    </ProfileContainer>
  )
}

export default Profile
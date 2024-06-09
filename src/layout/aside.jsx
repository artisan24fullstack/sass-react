import React from 'react'

import { GrFormClose } from "react-icons/gr"
import SuggestionUser from '../components/users/suggestion-user'
import StatutUser from '../components/users/statut-user'
import FollowingUser from '../components/users/following-user'
const Aside = ({ following, setFollowing, showMenu, setShowMenu }) => {

  return (
    <div className={showMenu ? "R-Side active" : "R-Side unActive"}>
      <GrFormClose
        className='closeBurger'
        onClick={() => setShowMenu(false)} />
      <SuggestionUser
        following={following}
        setFollowing={setFollowing}
      />

      <StatutUser />
      <FollowingUser
        following={following}
        setFollowing={setFollowing}
      />
    </div>
  )
}

export default Aside
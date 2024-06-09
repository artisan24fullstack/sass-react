import React, { useState } from 'react'
import { FollowimgData } from '../../data/FollowingData'
import FollowingList from './following-list'

const FollowingUser = ({ following, setFollowing }) => {

  const [showMore, setShowMore] = useState(false)


  return (
    <div className="following-comp">
      <h2>Who is following you</h2>
      {FollowimgData.map((data, id) => (

        <FollowingList
          following={following}
          setFollowing={setFollowing}
          data={data}
          key={id}
        />
      ))}



      {/*<button className='SM-btn' onClick={() => setShowMore(true)}>Show more</button>*/}
    </div>

  )
}

export default FollowingUser
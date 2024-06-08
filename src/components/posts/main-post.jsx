import React from 'react'
import Feedposts from './feed-post'


const MainPost = ({ posts, setPosts, setFriendsProfile, images }) => {
  return (
    <main className='homeMain'>

      {posts.length ? <Feedposts
        images={images}
        posts={posts}
        setPosts={setPosts}
        setFriendsProfile={setFriendsProfile}
      />
        :
        (<p style={{ textAlign: "center", marginTop: "40px" }}>
          NO POSTS ARE HERE
        </p>)
      }
    </main>
  )
}

export default MainPost
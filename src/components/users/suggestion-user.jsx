import React from 'react'


const SuggestionUser = () => {
  return (
    <div className="Sugg-comp">
      <h2>Suggestion For You</h2>

      <div className="sugg-people">
        <div className="s-left">
          <img src="https://i.pravatar.cc/150?img=6" alt="" />
          <h3>Prénom Nom</h3>
        </div>

        <div className="s-right">
          <button className='btn follow-btn '> + Follow</button>
          <button className='btn unfollow' > Unfollow</button>
        </div>
      </div>

      <div className="sugg-people">
        <div className="s-left">
          <img src="https://i.pravatar.cc/150?img=7" alt="" />
          <h3>Prénom Nom</h3>
        </div>

        <div className="s-right">
          <button className='btn following'>Following</button>
          <button className='btn dissmid-btn'>Dismiss</button>

        </div>
      </div>
      <div className="sugg-people">
        <div className="s-left">
          <img src="https://i.pravatar.cc/150?img=7" alt="" />
          <h3>Prénom Nom</h3>
        </div>

        <div className="s-right">
          <button className='btn following'>Following</button>
          <button className='btn unfollowing'> - Unfollow</button>

        </div>
      </div>

    </div>
  )
}

export default SuggestionUser
import React, { useState } from 'react'

const StatutList = ({ value }) => {


  let statutUser = useState(value.statut)
  //  console.log(statutUser)


  return (
    <div className={`statut-people ${statutUser[0] == "online" ? "online-people" : "offline-people"}`}>
      <img src={value.profilepicture} alt="" />
      <p>{value.username}</p>
    </div>
  )
}

export default StatutList
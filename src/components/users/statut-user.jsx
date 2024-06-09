import React from 'react'
import { DisPlayPostData } from '../../data/DisplayPostData'
import StatutList from './statut-list'

const StatutUser = () => {
  return (
    <div className="online-comp">
      <h2>Statut user</h2>

      {DisPlayPostData.map((value, id) => (
        <StatutList
          value={value}
          key={id}
        />

      ))}

    </div>
  )
}

export default StatutUser
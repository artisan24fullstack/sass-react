import { useState } from 'react'
import Nav from '../layout/navigation'
const Home = () => {

  const [search, setSearch] = useState("")



  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='interface'>
      <Nav
        search={search}
        setSearch={setSearch}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />

      <div className="home">
        <h1>Home page</h1>
      </div>

    </div>
  )
}

export default Home
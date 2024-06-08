import { useState } from 'react'
import Nav from '../layout/navigation'
import MenuSecondary from '../layout/secondary-menu'
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
      <h1>Home page</h1>

      <div className="home">
        <MenuSecondary />
      </div>

    </div>
  )
}

export default Home
import { useState } from 'react'
import Nav from '../layout/navigation'
import MenuSecondary from '../layout/secondary-menu'

const Profile = () => {

  const [following, setFollowing] = useState(3)
  const [search, setSearch] = useState("")

  const [showMenu, setShowMenu] = useState(false)

  const [images, setImages] = useState(null)

  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [profileImg, setProfileImg] = useState(`https://ui-avatars.com/api/?name=name+userName`)


  const [modelDetails, setModelDetails] = useState(
    {
      ModelName: "utilisateur connecté",
      ModelUserName: "@pseudo connecté",
      ModelCountryName: "Pays",
      ModelJobName: "Métier"
    }
  )

  return (
    <div className='interface'>
      <Nav
        search={search}
        setSearch={setSearch}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        profileImg={profileImg}
      />
      <div className="home">
        <MenuSecondary
          following={following}
          setFollowing={setFollowing}
          profileImg={profileImg}
          modelDetails={modelDetails}
        />

      </div>
    </div>
  )
}

export default Profile
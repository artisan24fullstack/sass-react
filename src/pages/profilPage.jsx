import { useState } from 'react'
import Nav from '../layout/navigation'
import MenuSecondary from '../layout/secondary-menu'
import ProfileUser from '../components/users/profile-user'

const Profile = () => {

  const [following, setFollowing] = useState()
  const [search, setSearch] = useState("")

  const [showMenu, setShowMenu] = useState(false)

  const [images, setImages] = useState(null)

  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  //const [countryName, setCountryName] = useState("");
  //const [jobName, setJobName] = useState('');
  const [profileImg, setProfileImg] = useState(`https://ui-avatars.com/api/?name=${name}+${userName} `)
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
      <div className="home homeProfil">
        <MenuSecondary
          following={following}
          setFollowing={setFollowing}
          profileImg={profileImg}
          modelDetails={modelDetails}
        />
        <ProfileUser
          following={following}
          search={search}
          images={images}
          setImages={setImages}
          name={name}
          setName={setName}
          userName={userName}
          setUserName={setUserName}
          profileImg={profileImg}
          setProfileImg={setProfileImg}
          modelDetails={modelDetails}
          setModelDetails={setModelDetails}
        />

        {/*
          countryName={countryName}
          setCountryName={setCountryName}
          jobName={jobName}
          setJobName={setJobName}
        */}

      </div>
    </div>
  )
}

export default Profile
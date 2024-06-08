
import { useEffect, useState } from 'react'

import moment from 'moment'
import InfoUser from './info-user'
import ModelProfile from './modal-user'

const ProfileUser = ({ following,
  search,
  images,
  setImages,
  profileImg,
  setProfileImg,
  name,
  setName,
  userName,
  setUserName,
  modelDetails,
  setModelDetails }) => {

  const [userPostData, setUserPostData] = useState(
    [
      {
        id: 1,
        username: "pseudoUserConnected",
        profilepicture: "https://i.pravatar.cc/300",
        img: `https://picsum.photos/seed/img2/300/200`,
        datetime: moment("20230401", "YYYYMMDD").fromNow(),
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum provident consequuntur reprehenderit tenetur, molestiae quae blanditiis rem placeat! Eligendi, qui quia quibusdam dolore molestiae veniam neque fuga explicabo illum?",
        like: 22,
        comment: 12
      },

    ]
  )
  const [body, setBody] = useState("")
  const [importFile, setImportFile] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()


    const id = userPostData.length ? userPostData[userPostData.length - 1].id + 1 : 1
    const username = "user"
    const profilepicture = Profile
    const datetime = moment.utc(new Date(), 'yyyy/MM/dd kk:mm:ss').local().startOf('seconds').fromNow()
    const img = images ? { img: URL.createObjectURL(images) } : null


    const obj = {
      id: id,
      profilepicture: profilepicture,
      username: username,
      datetime: datetime,
      img: img && (img.img),
      body: body,
      like: 0,
      comment: 0
    }

    const insert = [...userPostData, obj]
    setUserPostData(insert)
    setBody("")
    setImages(null)
  }




  const [searchResults, setSearchResults] = useState("")

  useEffect(() => {
    const searchData = userPostData.filter((val) => (
      (val.body.toLowerCase().includes(search.toLowerCase()))
      ||
      (val.username.toLowerCase().includes(search.toLowerCase()))
    ))
    setSearchResults(searchData)

  }, [userPostData, search])





  return (
    <div className='profileMiddle'>
      <InfoUser
        modelDetails={modelDetails}
        setModelDetails={setModelDetails}
        profileImg={profileImg}
        setProfileImg={setProfileImg}
        userPostData={userPostData}
        following={following}
        name={name}
        setName={setName}
        userName={userName}
        setUserName={setUserName}
      />


      {/*

        < ModelProfile
        name={name}
        setName={setName}
        userName={userName}
        setUserName={setUserName}
        handleModel={handleModel}
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
      />
          countryName={countryName}
        setCountryName={setCountryName}
        jobName={jobName}
        setJobName={setJobName}
      */}
    </div>
  )
}

export default ProfileUser
import { useState } from 'react'
import Nav from '../layout/navigation'
import MenuSecondary from '../layout/secondary-menu'
import TopCard from '../components/cards/top-card'
import MainPost from '../components/posts/main-post'
const Home = () => {


  const [posts, setPosts] = useState(
    [
      {
        id: 1,
        username: "Harry",
        profilepicture: "https://i.pravatar.cc/300",
        img: `https://picsum.photos/seed/img1/300/200`,
        //datetime: moment("20230131", "YYYYMMDD").fromNow(),
        body: "My 1st Post, Have A Good Day Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum laborum necessitatibus ex doloragnam ea?",
        like: 44,
        comment: 3,
        unFilledLike: true,
        coverpicture: `https://picsum.photos/seed/img1/200/300`,
        userid: "@Iamharry",
        ModelCountryName: "USA",
        ModelJobName: "Java Developer",
        ModelJoinedDate: "Joined in 2019-02-28",
        followers: 1478
      },
      {
        id: 2,
        username: "chris dhaniel",
        profilepicture: "https://i.pravatar.cc/300",
        img: `https://picsum.photos/seed/img2/300/200`,
        //datetime: moment("20230605", "YYYYMMDD").fromNow(),
        body: "My 2st Post, Have A Bad Day Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum laborum necessitatibus ex dolor reiciendis, consequuntur placeat repellat magnam ea?",
        like: 84,
        comment: 3,
        coverpicture: `https://picsum.photos/seed/img2/200/300`,
        userid: "@chris777",
        ModelCountryName: "Australia",
        ModelJobName: "Cyber Security",
        ModelJoinedDate: "Joined in 2018-01-17",
        followers: 1730
      },

    ]
  )

  const [body, setBody] = useState("")
  const [importFile, setImportFile] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()


    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const username = "nomPersonne"
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



    const insert = [...posts, obj]
    setPosts(insert)
    setBody("")
    setImages(null)

  }

  const [search, setSearch] = useState("")


  const [following, setFollowing] = useState("")

  const [showMenu, setShowMenu] = useState(false)
  const [images, setImages] = useState(null)

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

        <TopCard
          handleSubmit={handleSubmit}
          body={body}
          setBody={setBody}
          importFile={importFile}
          setImportFile={setImportFile}
          posts={posts}
          setPosts={setPosts}
          search={search}
          images={images}
          setImages={setImages}
        />

      </div>

    </div>
  )
}

export default Home
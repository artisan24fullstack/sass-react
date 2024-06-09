import "./assets/styles/main.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/homePage"
import Login from "./pages/RegisterPage/LoginPage"
import SignUp from "./pages/RegisterPage/SignUpPage"
import Profile from "./pages/profilPage"
import Notification from "./pages/notificationPage"

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/notification' element={<Notification />} />

          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App

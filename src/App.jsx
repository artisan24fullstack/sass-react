import "./assets/styles/main.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/homePage"
import Login from "./pages/RegisterPage/LoginPage"
import SignUp from "./pages/RegisterPage/SignUpPage"
import Profile from "./pages/profilPage"
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

          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App

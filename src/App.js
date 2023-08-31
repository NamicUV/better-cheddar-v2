import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import NoPage from './pages/NoPage'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/main' element={<Main />} />
          <Route path='/aboutUs' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App;

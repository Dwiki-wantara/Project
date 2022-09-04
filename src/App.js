import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import MoviesHome from './Pages/MoviesHome';
import TvShowHome from './Pages/TvShowHome';
import Video from './Pages/VideoDetail';
import Payment from './Pages/Payment';
import Profile from './Pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MoviesHome />} />
        <Route path='/tvshow' element={<TvShowHome />} />
        <Route path='/video' element={<Video />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/profile' element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

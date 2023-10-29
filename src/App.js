import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Home/components/header';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <div className='container-fluid w-100 h-100'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/video/:id' element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

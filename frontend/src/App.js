import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage/Home'
import Sharefile from './Components/Dashboard/ShareFile/ShareFile';
import History from './Components/Dashboard/History/History';
import Premium from './Components/Dashboard/Premium/Premium'
import Download from './Components/Dashboard/Download/DownloadFile';
import Error from './ErrorPage';
import About from './Components/MainPage/About';
import Contact from './Components/MainPage/Contact';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<><MainPage></MainPage></>}></Route>
          <Route path='/aboutUs' element={<><About></About></>}></Route>
          <Route path='/contactUs' element={<><Contact></Contact></>}></Route>
          <Route path='/dashboard/sharefile' element={<><Sharefile></Sharefile></>}></Route>
          <Route path='/dashboard/history' element={<><History></History></>}></Route>
          <Route path='/dashboard/premium' element={<><Premium></Premium></>}></Route>
          <Route path='/download-file/:FileId' element={<><Download></Download></>}></Route>
          <Route path='/*' element={<><Error></Error></>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

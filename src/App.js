import React from 'react'
import './App.css'
import MainHome from './Home/HomeJs/MainHome'
import { Route, Routes } from 'react-router-dom'
import MainAbout from './About/AboutJs/MainAbout'
import MainHomeSecond from './HeroSecond/HeroSecondJs/MainHomeSecond'
import MainManagement from './Management/ManagementJs/MainManagement'
import MainStructur from './Structure/StructurJs/MainStructur'
import MainDirect from './Direct/DirectJs/MainDirect'
import MainLeader from './Leader/LeaderJs/MainLeader'
import MainAnother from './Another/AnotherJs/MainAnother'
import MainPainting from './Painting/PaintingJs/MainPainting'
import MainPhoto from './Photo/PhotoJs/MainPhoto'
import MainVideo from './Video/VideoJs/MainVideo'
import MainServiceNews from './ServiceNews/ServiceNewsJs/MainServiceNews'
import MainPhotograph from './Photographs/PhotographsJs/MainPhotograph'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainHome/>}/>
        <Route path='/about' element={<MainAbout/>}/>
        <Route path='/secondhero' element={<MainHomeSecond/>}/>
        <Route path='/manage' element={<MainManagement/>}/>
        <Route path='/structur' element={<MainStructur/>}/>
        <Route path='/direct' element={<MainDirect/>}/>
        <Route path='/leader' element={<MainLeader/>}/>
        <Route path='/another' element={<MainAnother/>}/>
        <Route path='/paint' element={<MainPainting/>}/>
        <Route path='/photo' element={<MainPhoto/>}/>
        <Route path='/video' element={<MainVideo/>}/>
        <Route path='/news' element={<MainServiceNews/>}/>
        <Route path='/photograph' element={<MainPhotograph/>}/>
      </Routes>
    </div>
  )
}

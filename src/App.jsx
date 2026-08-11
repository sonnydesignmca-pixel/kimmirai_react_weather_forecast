import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hello from "./components/Hello";
import PageHeader from "./components/pageHeader"
import WeathersPage from "./pages/WeathersPage"
// import  {useWeather} from "./utils/util.js";
import SwiperSample from "./pages/SwiperSample"

function App() {
  return (
    <div>
      <WeathersPage />
      {/* <SwiperSample /> */}

    </div>
  )
}

export default App

import './App.scss'

import {
  Nav,
  Hero,
  SeriesMovies,
  Subscribtion,
} from "./pages"


function App() {
  

  return (
    <div className='app'>
      <Nav/>
      <Hero/>
      <SeriesMovies/>
      <Subscribtion/>
    </div>
  )
}

export default App

import './App.css'
import { About } from './layouts/about'
import { Home } from './layouts/home'
import { Service } from './layouts/service'
import { Agend } from './layouts/agend'
import { Review } from './layouts/review'
import { Partners } from './layouts/partners'

function App() {
  return (
    <>
      <Home />
      <About />
      <Service />
      <Agend />
      <Review />
      <Partners />
    </>
  )
}

export default App

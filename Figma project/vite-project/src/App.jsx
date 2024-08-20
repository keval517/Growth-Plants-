import Home from './Home page/Home'
import Plants from './Component2/Plants'
import Newplants from './Components3/Newplants'
import Indore from './Components4/Indore'
import Info from './Components5/Info'
import Contect from './Components6/Contect'

function App() {

  return (
    <>
      <div className=' overflow-hidden '>
          <Home/>
          <Plants/>
          <Newplants/>
          <Indore/>
          <Info/>
          <Contect/>
      </div>
    </>
  )
}

export default App

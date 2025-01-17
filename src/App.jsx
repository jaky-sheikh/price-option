
import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className='text-3xl font-bold bg-rose-400'>Price option</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App

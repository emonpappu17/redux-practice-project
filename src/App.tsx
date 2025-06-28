import Navbar from './components/layout/Navbar'
import { Outlet } from 'react-router'
// import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App

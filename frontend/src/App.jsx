
import './App.css'
import { Home,UserPlus,LayoutDashboardIcon  } from "lucide-react";
import {motion} from 'framer-motion'
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision'
import { FloatingNav } from './components/ui/floating-navbar'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Navbar from './Navbar'
import Homepage from './Home'
import { Logo } from './Logo';
import Signup from './Signup'
function App() {
 
  
    


  return (
    <>
    <BrowserRouter>
  <div className="h-screen w-full ">
 
   
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/studashboard" element={"Dashboard"} />
    </Routes>
    
  
</div>

   </BrowserRouter> 
    
    </>
  )
}

export default App


import './App.css'
import Dashboard from './Dashboard';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Navbar from './Navbar'
import Homepage from './Home'
import { Logo } from './Logo';
import Signup from './Signup'
import Signin from './Signin';
import NotFound from './NotFound';
function App() {
 
  
    


  return (
    <>
    <BrowserRouter>
  <div className="h-screen w-full ">
 
   
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/studashboard" element={<Dashboard/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  
</div>

   </BrowserRouter> 
    
    </>
  )
}

export default App

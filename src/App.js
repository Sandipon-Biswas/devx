
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/Pages/About';
import Navberr from './components/Navber/Navberr';
import Contact from './components/Pages/Contact';
// import Blog from './components/Blog/Blog';

import Blog1 from './components/Blog/Blog1';
import Blogs from './components/Blog/Blogs';
import Login from './components/Pages/Login/Login';
import Footer from './components/Pages/Footer';
import Dboard from './components/Pages/Dboard';



function App() {

 

  return (
    
   <BrowserRouter>
   <Navberr/>
   <div>
     <Routes>
     
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={< Contact />} />
       <Route path="/login" element={ <Login/> } />
       <Route path="/blog" element={<Blog1/>} />
       <Route path="/dboard" element={ <Dboard/> } />
       <Route path="/blogs/:id" element={ <Blogs/> } />
       
     </Routes>
   </div>
   <Footer/>
 </BrowserRouter>
  );
}

export default App;

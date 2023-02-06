import './App.css';
// import './index.css';
import {Header} from './components/Header'
import {Footer} from './components/footer'
import {Home} from "./pages/home"
import {About} from "./pages/about"
import {Solutions} from "./pages/solutions"
import {Portfolio} from "./pages/portfolio"
import {Programs} from "./pages/programs"
import {Contact} from "./pages/contact"
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <> 
  <Header />
  <Routes>
   
   <Route path='/' element={<Home />} />
   <Route path='/about' element={<About />} />
   <Route path='/solutions' element={<Solutions />} />
   <Route path='/portfolio' element={<Portfolio />} />
   <Route path='/programs' element={<Programs />} />
   <Route path='/Contact' element={<Contact />} />

  </Routes>

   <Footer/>
  </>
  );
}

export default App;

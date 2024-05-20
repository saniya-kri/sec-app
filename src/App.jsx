import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import Apprenticeships from './pages/apprenticeships/Apprenticeships'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Jobs from './pages/jobs/Jobs'
import './index.css'



const App =  () =>  {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path ="/" element ={<About/>} />
         <Route path ="/jobs" element ={<Jobs/>} />
         <Route path ="/apprenticeships" element ={<Apprenticeships/>} />
         <Route path ="/notFound" element ={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Saat from './Components/Saat';
import SaniyeOlcen from './Components/SaniyeOlcen';
import Timer from './Components/Timer';
function App() {
  return (
    <div className="App">
       <div className='menu'>
      <NavLink to='/'>Saat</NavLink>
      <NavLink to='/saniyeolcen'>Saniye</NavLink>
      <NavLink to='/timer'>Timer</NavLink>
      </div>  
      

    <Routes>
      <Route path='/' element={<Saat />}/>
      <Route path='/saniyeolcen' element={<SaniyeOlcen />} />
      <Route path='/timer' element={<Timer />} />
    </Routes>
    </div>
  );
}

export default App;

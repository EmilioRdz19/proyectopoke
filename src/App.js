import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Narvar from './components/navegacion/Narvar'
import Matricula from './components/pages/Matricula'
import Pokemon from './components/pages/Pokemon'
import Items from './components/pages/Items'


function App(){

  return(
    <div className="App">
     <BrowserRouter>
       <Narvar/>
       <Routes>
       <Route path='/Matricula' element={<Matricula/>}/>
       <Route path='/Pokemon' element={<Pokemon/>}/>
       <Route path='/Items/:items'element={<Items/>}/>
       </Routes>
     </BrowserRouter>


    </div>
 );

}

export default App;

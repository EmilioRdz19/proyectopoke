import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Narvar from './components/navegacion/Narvar'
import Matricula from './components/pages/Matricula'
import Pokemon from './components/pages/Pokemon'
import Items from './components/pages/Items'


function App(){

  return(
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
      <Narvar/>
    <BrowserRouter>
<Routes>
<Route path='/' element={<Pokemon/>}/>
</Routes>
         
      </BrowserRouter>


    </div>
 );

}

export default App;

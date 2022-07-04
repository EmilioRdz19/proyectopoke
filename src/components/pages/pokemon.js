import React ,{useState , useEffect} from 'react'
import {UseFetch} from '../UseFetch'
import {Link} from 'react-router-dom'


const Pokemon = () => {
const [data, setData] = useState([{}])
useEffect(() => {
  const obtenerpokemon = async()=> {
    const resultado =  await UseFetch()
   console.log(resultado)
   setData(resultado.data.results)
   }
   obtenerpokemon()
}, []);

const getPokemon = (id) =>{
console.log(id)

}
  return (
    <div>

<ul>
{data.map((pokemon, index) => {
  return (
               <li  key={index}
                >
                  <h2>{pokemon.name}</h2>
                  <Link to={`/Items/${index+1}`} type="button" className="btn btn-dark">Mostrar Pokemon</Link>
                </li>

)
})}
          </ul>

    </div>
  )
}

export default Pokemon
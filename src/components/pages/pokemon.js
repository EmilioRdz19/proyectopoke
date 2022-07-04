import React ,{useState , useEffect} from 'react'
import {UseFetch} from '../UseFetch'

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
                  onClick={() => getPokemon(index + 1)}
                >
                  <p>{pokemon.name}</p>
                </li>

)
})}
          </ul>

    </div>
  )
}

export default Pokemon
import React ,{useState} from 'react'
import {UseFetch} from '../UseFetch'


const Pokemon = () => {
    const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon')
    const estado= UseFetch(url)
    const {cargando,data}=estado
    cargando? console.log('cargando'):console.log(data.results)

  return (
    <div>pokemon</div>
  )
}

export default Pokemon
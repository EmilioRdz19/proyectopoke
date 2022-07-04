import React , {useState,useEffect} from 'react'
import axios from 'axios'

export const UseFetch = () => {
    const resultado = axios.get('https://pokeapi.co/api/v2/pokemon')
  return resultado
    
}




import React , {useState , useEffect} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'


const Items = () => {
  const params = useParams()
  const [data, setData] = useState({})
  useEffect(() => {
    const UseFetch = async () => {
      const resultado = await axios.get('https://pokeapi.co/api/v2/pokemon/' + params.Items)
      setData(resultado)
    return resultado
      
  }
  const a = UseFetch()
  console.log(a)
  }, []);
  return (
    <div>


    </div>
  )
}

export default Items
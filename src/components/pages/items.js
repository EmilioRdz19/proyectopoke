import React , {useState , useEffect} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'


const Items = () => {
  const params = useParams()
  const [data, setData] = useState({})
  const [est,setEst] = useState(false);
  useEffect(() => {
    const UseFetch = async () => {
      const resultado = await axios.get('https://pokeapi.co/api/v2/pokemon/' + params.Items)
      setData(resultado.data)
      setEst(true)
      console.log(resultado.data)
    return resultado
      
  }
  UseFetch()
  
  }, []);
  return (
    <div>
{est && 
<div className="">
                <h1 className="">Pokemon</h1>
                <p className="">{data.name}</p>
                <img src={data.sprites.front_default} alt="pokemon" />
              <div>
                <p className=''>Exp: {data.base_experience}</p>
                </div>
          </div>
}

    </div>
  )
}

export default Items
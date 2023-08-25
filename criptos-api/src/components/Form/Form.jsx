import { useEffect , useState} from 'react'
import useSelectCripto from '../../hooks/useSelectCripto'
import { FormCtn } from './styledForm'
import {coins} from '../../data/coins'

export function Form({setMoeda}) {
  const [criptos , setCriptos ] = useState([])
  const [error , setError ] = useState(false)

  const [ cash, SelectCash ] = useSelectCripto('Selecione sua Moeda',coins)
  const [ crypto, SelectCryptos] = useSelectCripto('Selecione sua Crypto', criptos)

  useEffect(()=>{
    const consultarApi = async()=>{
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
      const answer = await fetch(url)
      const result = await answer.json()
      const arrayCriptos = result.Data.map((cripto) =>{

      const obj = {
        id: cripto.CoinInfo.Name,
        name: cripto.CoinInfo.FullName
      }  
      return obj
    })
    setCriptos(arrayCriptos)
  }
    consultarApi()
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault()
    if([cash, crypto].includes("")){
       setError(true)
      return
    }
    setError(false)
    setMoeda({cash, crypto})
  }

  return (
    <>
    {error && <p>Todos os Campos são <strong>OBRIGATORIOS</strong></p>}

    <FormCtn onSubmit={handleSubmit}>
      <SelectCash/>
      <SelectCryptos/>
      <input className='submitInput' type="submit" value={'consultar'} placeholder='CONSULTAR'/>
    </FormCtn>
    </>
  )
}


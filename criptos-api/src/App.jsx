import { useState, useEffect } from 'react'
import { GlobalStyled } from './globals/globalStyled'
import {AppCtn, HeadingCtn, ImgCtn, TextCtn} from './globals/styledContainers'
import criptoImg from './assets/img/criptoImg.png'
import { Form } from './components/Form/Form'
import ExchangeResult from './components/ExchangeResult/ExchangeResult'

export function App() {
  const [moeda, setMoeda] = useState({})
  const [exchange, setExchange ] = useState({})
  const [load, setLoad] = useState(false)
  useEffect(()=>{
    if(Object.keys(moeda).length>0){
      
      const exchangeCrypto = async()=>{
        setLoad(true)
        const {cash, crypto} = moeda
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${cash}`
        
        const response = await fetch(url)
        const result = await response.json()
        
        setExchange(result.DISPLAY[crypto][cash])
        setLoad(false)

      }
      exchangeCrypto()

    }
  }, [moeda])
console.log(exchange)
  return (
    <>
    <GlobalStyled/>
        <HeadingCtn>
          <h1>CRYPTOS-API</h1>
          <p>Cotação ATUAL em Tempo Real da sua Crypto</p>
        </HeadingCtn>
        <AppCtn>
       
        <TextCtn>
          <Form
          setMoeda={setMoeda}
          />
          <div>
          {load && <p>Load Results...</p>}
          {exchange && exchange.PRICE && 
            <ExchangeResult
            exchange={exchange}
            />}
            </div>
        </TextCtn>
        <ImgCtn>
        <img src={criptoImg} alt={'img criptos'}/>
      </ImgCtn>
      </AppCtn>
    </>
  )
}


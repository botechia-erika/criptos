import { useState, useEffect } from 'react'
import { GlobalStyled } from './globals/globalStyled'
import {AppCtn, HeadingCtn, ImgCtn, TextCtn} from './globals/styledContainers'
import criptoImg from './assets/img/criptoImg.png'
import { Form } from './components/Form/Form'


export function App() {
  const [moeda, setMoeda] = useState({})

  useEffect(()=>{
    if(Object.keys(moeda).length>0){
      console.log(moeda)
    }
  }, [moeda])

  return (
    <>
    <GlobalStyled/>
        <HeadingCtn>
          <h1>CRIPTOS-API</h1>
        </HeadingCtn>
        <AppCtn>
       
        <TextCtn>
          <Form
          setMoeda={setMoeda}
          />
        </TextCtn>
        <ImgCtn>
        <img src={criptoImg} alt={'img criptos'}/>
      </ImgCtn>
        </AppCtn>
    </>
  )
}


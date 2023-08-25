import { useState } from 'react'
import { GlobalStyled } from './globals/globalStyled'
import {AppCtn, HeadingCtn, ImgCtn, TextCtn} from './globals/styledContainers'
import criptoImg from './assets/img/criptoImg.png'
import { Form } from './components/Form'


export function App() {

  return (
    <>
    <GlobalStyled/>
        <HeadingCtn>
          <h1>CRIPTOS-API</h1>
        </HeadingCtn>
        <AppCtn>
        <ImgCtn>
          <img src={criptoImg} alt={'img criptos'}/>
        </ImgCtn>
        <TextCtn>
          <Form/>
        </TextCtn>
      </AppCtn>
    </>
  )
}


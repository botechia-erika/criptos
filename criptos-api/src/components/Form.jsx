import useSelectCripto from '../hooks/useSelectCripto'
import { FormCtn } from './styledForm'

export function Form() {
  const [ SelectCriptos ] = useSelectCripto('Selecione sua Moeda')
  const [ SelectCoins ] = useSelectCripto('Selecione sua Cripto ')
  return (
    <>
    <FormCtn>
      <SelectCriptos/>
      <SelectCoins/>
      <input className='submitInput' type="submit" value={'consultar'} placeholder='CONSULTAR'/>
    </FormCtn>
    </>
  )
}


import { CtnExchange } from './styledExchangeResult'

const ExchangeResult = ({exchange}) => {

  const {PRICE, HIGHDAY, LOWDAY, LASTUPDATE,  IMAGEURL } = exchange
  return (

    <CtnExchange>
    <h2>COTAÇÃO DA CRYPTO</h2>
    <div>
      <p>Preço ATUALIZADO: <span>{PRICE}</span></p>
      <p>Preço + ALTO do dia: <span>{HIGHDAY}</span></p>
      <p>Preço + BAIXO do dia: <span>{LOWDAY}</span></p>
      <p>ULTIMA ATUALIZAÇÃO: <span>{LASTUPDATE}</span></p>
      </div>
    <div>
      <img src={`https://cryptocompare.com/${IMAGEURL}`} alt={'img da crypto'}/>
      </div>
    </CtnExchange>
  )
}

export default ExchangeResult

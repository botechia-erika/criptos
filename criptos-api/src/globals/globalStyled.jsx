import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
*{font-family: 'Lato', sans-serif;
background: hsl(202, 78%, 49%);
}

label{
    color: white;
    display: block;
    margin: 30px auto;
    text-align: center;
    font-weight: 900;
}
`
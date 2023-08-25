import styled from 'styled-components'

export const AppCtn = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;

    @media (min-width: 992px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`

export const HeadingCtn = styled.header`
    font-family: 'Lato', sans-serif;
    color: white;
    text-align: center;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 20px;

`


export const ImgCtn = styled.div`
display: inline-block;
img{max-width: 400px;
width: 80%;
margin: 100px auto 0 auto;
display: block;
}
`

export const TextCtn = styled.div`
display: inline-block;
max-width: 900px;
margin: 0 auto;
`
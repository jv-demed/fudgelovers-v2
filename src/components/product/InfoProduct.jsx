import styled from 'styled-components';

const InfoProductStyled = styled.div`
    display: flex;
    gap: 4%;
    img{
        width: 48%;
    }
`

export default function InfoProduct({ name, img, value }){
    return(
        <InfoProductStyled>
            <img src={img} alt={name} />
            <span>R${value}</span>
        </InfoProductStyled>
    )
}
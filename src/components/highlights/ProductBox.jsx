import styled from 'styled-components';

const ProductBoxStyled = styled.div`
    background-color: ${({ theme }) => theme.palette.gray.i50};
    border-radius: 4px;
    height: 300px;
    margin: 0 auto;
    width: 95%;
    img{
        border-radius: 4px 4px 0 0;
        width: 100%;
    }
    .productInfo{
        display: flex;
        flex-direction: column;
        font-family: 'Montserrat', sans-serif;
        padding: 2px 15px;
    }
    @media(max-width: 650px){
        width: 85%;
    }
`

export default function ProductBox({ product }){
    return(
        <ProductBoxStyled>
            <img src={product.img} alt={product.desc} />
            <div className='productInfo'>
                <span>{product.nome}</span>
                <span>R${product.valor}</span>
            </div>
        </ProductBoxStyled>
    )
}
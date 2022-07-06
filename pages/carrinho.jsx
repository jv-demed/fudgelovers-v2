import styled from 'styled-components';
import TitleSection from '../src/components/globals/TitleSection';
import CartList from '../src/components/shoppingCart/CartList';
import PriceBox from '../src/components/shoppingCart/PriceBox';

const CarrinhoStyled = styled.section`
    display: flex;
    flex-direction: column;
    .content{
        display: flex;
        gap: 10px
    }
    @media(max-width: 650px){
        .content{
            flex-direction: column;
        }
    }
`


export default function Carrinho(){
    return(
        <CarrinhoStyled className='container'>
            <TitleSection title='Carrinho de Compras' size={2} />
            <div className='content'>
                <CartList />
                <PriceBox />
            </div>
        </CarrinhoStyled>
    )
}
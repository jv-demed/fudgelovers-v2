import styled from 'styled-components';
import TitleSection from '../src/components/globals/TitleSection';
import CartList from '../src/components/shoppingCart/CartList';

const CarrinhoStyled = styled.section`
    //padding-top: 20px;
`


export default function Carrinho(){
    return(
        <CarrinhoStyled className='container'>
            <TitleSection title='Carrinho de Compras' size={2} />
            <CartList />
        </CarrinhoStyled>
    )
}
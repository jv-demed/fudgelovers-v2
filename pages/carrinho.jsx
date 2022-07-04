import styled from 'styled-components';
import TitleSection from '../src/components/globals/TitleSection';
import CartList from '../src/components/shoppingCart/CartList';

const CarrinhoStyled = styled.section`
    //padding-top: 20px;
`


export default function Carrinho({ shoppingCart }){
    const items = [
        {
            name: 'Fudge Avelã',
            value: 22
        },{
            name: 'Torta de Sorvete de Creme',
            value: 60
        },
    ]
    return(
        <CarrinhoStyled className='container'>
            <TitleSection title='Carrinho de Compras' size={2} />
            <CartList shoppingCart={shoppingCart} />
        </CarrinhoStyled>
    )
}
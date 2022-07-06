import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../providers/CartProvider';
import CartItem from './CartItem';

const CartListStyled = styled.div`
    background-color: ${({ theme }) => theme.palette.gray.i50};
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    padding: 10px;
    row-gap: 10px;
`

export default function CartList(){

    const { items } = useContext(CartContext);

    return(
        <CartListStyled>
            {console.log(items)}
            {items.length > 0 ?
               items.map((item, i) => {
                    return(
                        <CartItem 
                            item={item}
                            key={'product'+i}
                        />
                    )
                })
                :
                <span>Nenhum item no carrinho.</span>
            }
        </CartListStyled>
    )
}
import { useState } from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const CartListStyled = styled.div`
    background-color: ${({ theme }) => theme.palette.gray.i50};
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    padding: 10px;
    row-gap: 10px;
`

export default function CartList({ shoppingCart }){
    return(
        <CartListStyled>
            {shoppingCart.length > 0 ?
                shoppingCart.map((cartItem) => <CartItem cartItem={cartItem} />)
                :
                <span>Não há itens em seu carrinho.</span>
            }
        </CartListStyled>
    )
}
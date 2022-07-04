import { useState } from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import { store } from '../../redux/store';

const CartListStyled = styled.div`
    background-color: ${({ theme }) => theme.palette.gray.i50};
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    padding: 10px;
    row-gap: 10px;
`

export default function CartList(){

    const shoppingCart = store.getState().value;

    return(
        <CartListStyled>
            {shoppingCart.length > 0 ?
                shoppingCart.map((cartItem, i) => {
                    return(
                        <CartItem 
                            cartItem={cartItem}
                            key={'product'+i}
                        />
                    )
                })
                :
                <span>Nenhum item no carrinho.</span>
            }
            {console.log(shoppingCart)}
        </CartListStyled>
    )
}
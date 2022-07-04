import { useState } from 'react';
import styled from 'styled-components';
import Counter from '../globals/Counter';

const CartItemStyled = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    img{
        width: 60px;
    }
`

export default function CartItem({ cartItem }){
    return(
        <CartItemStyled>
            <img src={cartItem.img} alt={cartItem.name} />
            {cartItem.name}
        </CartItemStyled>
    )
}
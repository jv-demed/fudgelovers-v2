import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';

const ShoppingCartStyled = styled.span`
    align-items: center;
    color: ${({ theme }) => theme.palette.basics.white};
    cursor: pointer;
    display: flex;
    font-size: 1.4rem;
    gap: 5px;
    span{
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
    }
`

export default function ShoppingCart({ shoppingCart }){

    return(
        <ShoppingCartStyled>
            <FiShoppingCart />
            <span>
                {shoppingCart.length} - R$0,00
            </span>
        </ShoppingCartStyled>
    )
}
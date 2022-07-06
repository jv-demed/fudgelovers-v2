import { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { CartContext } from '../../providers/CartProvider';
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

export default function ShoppingCart(){

    const { getQuantItems, getTotal } = useContext(CartContext);

    return(
        <Link href='/carrinho'>
            <ShoppingCartStyled>
                <FiShoppingCart />
                <span>
                    {getQuantItems()} - 
                    R${getTotal()}
                </span>
            </ShoppingCartStyled>
        </Link>
    )
}
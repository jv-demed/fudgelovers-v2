import Link from 'next/link';
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

    function valueCart(){
        shoppingCart.reduce(tot, item => {
            tot += item.value;
        });
        return tot;
    }

    return(
        <Link href='/carrinho'>
            <ShoppingCartStyled>
                <FiShoppingCart />
                <span>
                    {shoppingCart.length} - 
                    R${shoppingCart.reduce((tot, item) => {
                        tot += item.value;
                        return tot;
                    }, 0)}
                </span>
            </ShoppingCartStyled>
        </Link>
    )
}
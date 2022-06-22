import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';

const MenuStyled = styled.nav`
    display: flex;
    gap: 20px;
    ul{
        align-items: center;
        color: ${({ theme }) => theme.palette.basics.white};
        display: flex;
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        gap: 20px;
        li{
            cursor: pointer;
        }
        li:hover{
            color: ${({ theme }) => theme.palette.gray.i100};
        }
    }
    @media(max-width: 650px){
        display: none;
    }
`

export default function Menu({ shoppingCart }){
    return(
        <MenuStyled>
            <ul>
                <li>Início</li>
                <li>Produtos</li>
                <li>Contato</li>
            </ul>
            <ShoppingCart shoppingCart={shoppingCart} />
        </MenuStyled>
    )
}
import { useMedia } from 'use-media';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import ShoppingCart from './ShoppingCart';

const MenuStyled = styled.nav`
    display: flex;
    gap: 20px;
    .menuDesktop{
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
`

export default function Menu({ shoppingCart }){

    const isMobile = useMedia({ maxWidth: 650 });

    return(
        <MenuStyled>
            {isMobile ?
                <Hamburger shoppingCart={shoppingCart} />
                :
                <ul className='menuDesktop'>
                    <li>Início</li>
                    <li>Produtos</li>
                    <li>Contato</li>
                    <ShoppingCart shoppingCart={shoppingCart} />
                </ul>
            }
        </MenuStyled>
    )
}
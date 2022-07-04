import Link from 'next/link';
import { useMedia } from 'use-media';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import ShoppingCart from './ShoppingCart';

const MenuStyled = styled.nav`
    display: flex;
    gap: 20px;
    .menuDesktop{
        align-items: center;
        display: flex;
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        gap: 20px;
        li{
            cursor: pointer;
            a{
                color: ${({ theme }) => theme.palette.basics.white};
            }
            a:hover{
                color: ${({ theme }) => theme.palette.gray.i100};
            }
        }
    }
`

export default function Menu(){

    const isMobile = useMedia({ maxWidth: 650 });

    return(
        <MenuStyled>
            {isMobile ?
                <Hamburger />
                :
                <ul className='menuDesktop'>
                    <li>
                        <Link href='/'>
                            <a>Início</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/produtos'>
                            <a>Produtos</a>
                        </Link>
                    </li>
                    <li><a>Contato</a></li>
                    <ShoppingCart />
                </ul>
            }
        </MenuStyled>
    )
}
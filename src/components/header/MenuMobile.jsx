import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';
import { Popover } from '@headlessui/react';
import { VscChromeClose } from 'react-icons/vsc';

const MenuMobileStyled = styled.div`
    @keyframes slide{
        0%{
            right: -80%;
        }100%{
            right: 0;
        }
    }
    animation: slide 0.2s linear;
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.basics.white};
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    height: 100vh;
    padding: 15px 10px;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    width: 80%;
    span{
        align-items: center;
        display: flex;
        justify-content: space-between;
        .closeBtn{
            background-color: rgba(0,0,0,0);
            border: none;
            color: ${({ theme }) => theme.palette.basics.white};
            font-size: 1.8rem;
        }
    }
    ul{
        margin-top: 20px;
        li{
            border-bottom: 1px solid white;
            padding: 10px 0;
        }
    }
`

export default function MenuMobile({ shoppingCart }){
    return(
        <MenuMobileStyled>
            <span>
                <Popover.Button className='closeBtn'>
                    <VscChromeClose />
                </Popover.Button>
                <ShoppingCart shoppingCart={shoppingCart} />
            </span>
            <ul>
                <li>Início</li>
                <li>Produtos</li>
                <li>Contato</li>
            </ul>
        </MenuMobileStyled>
    )
}
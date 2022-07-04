import Link from 'next/link';
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
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    padding: 15px 10px;
    position: fixed;
        right: 0;
        top: 0;
    width: 80%;
    span{
        display: flex;
        justify-content: space-between;
        .closeBtn{
            background-color: rgba(0,0,0,0);
            border: none;
            color: ${({ theme }) => theme.palette.basics.white};
            cursor: pointer;
            font-size: 1.8rem;
        }
    }
    ul{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        text-align: center;
        li{
            border-bottom: 1px solid white;
            cursor: pointer;
            padding: 10px 0;
            width: 100%;
            a{
                color: ${({ theme }) => theme.palette.basics.white};
            }
            a:hover{
                color: ${({ theme }) => theme.palette.gray.i100};
            }
        }
    }
`

export default function MenuMobile(){
    return(
        <MenuMobileStyled>
            <span>
                <Popover.Button className='closeBtn'>
                    <VscChromeClose />
                </Popover.Button>
                <ShoppingCart />
            </span>
            <ul>
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
                <li>
                    <a>Contato</a>
                </li>
            </ul>
        </MenuMobileStyled>
    )
}
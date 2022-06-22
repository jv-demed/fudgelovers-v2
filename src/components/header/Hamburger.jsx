import styled from 'styled-components';
import { Popover } from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import MenuMobile from './MenuMobile';

const HamburgerStyled = styled.span`
    display: none;
    @media(max-width: 650px){
        display: flex;
        .hamburger{
            background-color: rgba(0,0,0,0);
            border: none;
            color: ${({ theme }) => theme.palette.basics.white};
            display: flex;
            font-size: 1.6rem;
            outline: none;
        }
    }
`

export default function Hamburger({ shoppingCart }){
    return(
        <HamburgerStyled>
            <Popover>
                <Popover.Panel>
                    <MenuMobile shoppingCart={shoppingCart} />
                </Popover.Panel>
                <Popover.Button className='hamburger'>
                    <GiHamburgerMenu />
                </Popover.Button>
            </Popover>
        </HamburgerStyled>
    )
}
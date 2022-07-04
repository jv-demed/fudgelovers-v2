import styled from 'styled-components';
import { Popover } from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import MenuMobile from './MenuMobile';

const HamburgerStyled = styled.span`
    .hamburgerButton{
        background-color: rgba(0,0,0,0);
        border: none;
        color: ${({ theme }) => theme.palette.basics.white};
        display: flex;
        font-size: 1.6rem;
        outline: none;
    }
`

export default function Hamburger(){
    return(
        <HamburgerStyled>
            <Popover>
                <Popover.Button className='hamburgerButton'>
                    <GiHamburgerMenu />
                </Popover.Button>
                <Popover.Panel>
                    <MenuMobile />
                </Popover.Panel>
            </Popover>
        </HamburgerStyled>
    )
}
import styled from 'styled-components';
import { logos } from '../../assets/images';
import Menu from './Menu';
import Hamburger from './Hamburger';

const HeaderStyled = styled.header`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.main};
    display: flex;
    height: 80px;
    justify-content: space-between;
    img{
        cursor: pointer;
        width: 120px;
    }
`

export default function Header({ shoppingCart }){
    return(
        <HeaderStyled className='container'>
            <img src={logos.logo.img} alt={logos.logo.desc} />
            <Menu shoppingCart={shoppingCart} />
            <Hamburger shoppingCart={shoppingCart} />
        </HeaderStyled>
    )
}
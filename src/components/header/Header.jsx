import styled from 'styled-components';
import { logos } from '../../assets/images';
import Menu from './Menu';

const HeaderStyled = styled.header`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.main};
    display: flex;
    justify-content: space-between;
    position: sticky;
        top: 0;
    width: 100%;
    z-index: 2;
    img{
        cursor: pointer;
        margin: 5px 0;
        width: 120px;
    }
`

export default function Header({ shoppingCart }){
    return(
        <HeaderStyled className='header container'>
            <img src={logos.logo.img} alt={logos.logo.desc} />
            <Menu shoppingCart={shoppingCart} />
        </HeaderStyled>
    )
}
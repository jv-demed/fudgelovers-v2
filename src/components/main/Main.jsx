import styled from 'styled-components';
import { backgrounds } from '../../assets/images';
import WelcomeText from './WelcomeText';
import BtnArea from './BtnArea';
  
const MainStyled = styled.main`
    align-items: center;
    background-attachment: fixed;
    background-image: url(${backgrounds.main.img});
    background-position: top;
    background-size: cover;
    color: ${({ theme }) => theme.palette.basics.white};
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    gap: 25px;
    justify-content: center;
    min-height: 80vh;
    @media(max-width: 650px){
        min-height: 60vh;
    }
`

export default function Main(){
    return(
        <MainStyled className='container'>
            <WelcomeText />
            <BtnArea />
        </MainStyled>
    )
}
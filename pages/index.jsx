import styled from 'styled-components';
import Main from '../src/components/main/Main';

const HomeStyled = styled.main`
    height: 150vh;
`

export default function Home(){
    return(
        <HomeStyled>
            <Main />
        </HomeStyled>
    )
}
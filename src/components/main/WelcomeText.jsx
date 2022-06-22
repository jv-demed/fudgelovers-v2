import styled from "styled-components";
import { slogans } from '../../assets/infos';
 
const WelcomeTextStyled = styled.div`
    text-shadow: 1px 1px 1px #000;
    h2{
        font-size: 3.2rem;
        margin-bottom: 15px;
    }
    span{
        font-size: 1.3rem;
    }
    @media(max-width: 650px){
        h2{
            font-size: 2rem;
        }
        span{
            display: none;
        }
    }
`

export default function WelcomeText(){
    return(
        <WelcomeTextStyled>
            <h2>{slogans.title}</h2>
            <span>{slogans.subtitle}</span>
        </WelcomeTextStyled>
    )
}
import styled from 'styled-components';
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import { BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs';

const CopyrightStyled = styled.div`
    .icons{
        display: flex;
        gap: 10px;
        margin-top: 10px
    }
    @media(max-width: 650px){
        .icons{
            justify-content: center;
        }
    }
`

export default function Copyright(){
    return(
        <CopyrightStyled>
            <span>
                Desenvolvido por <b>Fudge Lovers</b>.
                <br />Todos os direitos reservados 
                <AiOutlineTrademarkCircle />
            </span>
            <div className='icons'>
                <BsWhatsapp size={18} />
                <BsInstagram size={18} />
                <BsFacebook size={18} />
            </div>
        </CopyrightStyled>
    )
}
import styled from 'styled-components';
import Btn from '../globals/Btn';
import { IoIosCube } from 'react-icons/io';
import { BsWhatsapp } from 'react-icons/bs';

const BtnAreaStyled = styled.div`
    display: flex;
    gap: 40px;
    .whatsapp:hover{
        background-color: ${({ theme }) => theme.palette.socialMedias.whatsapp};
    }
    @media(max-width: 650px){
        flex-direction: column;
        gap: 10px
    }
`

export default function BtnArea(){
    return(
        <BtnAreaStyled>
            <Btn>
                EXPLORAR
                <IoIosCube />
            </Btn>
            <Btn className='whatsapp'>
                WHATSAPP
                <BsWhatsapp />
            </Btn>
        </BtnAreaStyled>
    )
}
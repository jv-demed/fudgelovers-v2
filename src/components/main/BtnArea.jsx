import Link from 'next/link';
import styled from 'styled-components';
import MainBtn from '../globals/MainBtn';
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
            <Link href='/produtos'>
                <MainBtn>
                    EXPLORAR
                    <IoIosCube />
                </MainBtn>
            </Link>
            <MainBtn className='whatsapp'>
                WHATSAPP
                <BsWhatsapp />
            </MainBtn>
        </BtnAreaStyled>
    )
}
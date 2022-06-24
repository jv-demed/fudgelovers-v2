import styled from 'styled-components';
import { BsPhone, BsHouseDoor } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { RiSuitcaseLine } from 'react-icons/ri';
import { company, contact } from '../../assets/infos';

const CompanyInformationStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    span{
        align-items: center;
        display: flex;
        gap: 8px;
        justify-content: right;
    }
    @media(max-width: 650px){
        padding-left: 20px;
        span{
            flex-direction: row-reverse;
            justify-content: left;
        }
    }
`

export default function CompanyInformation(){
    return(
        <CompanyInformationStyled>
            <span>
                {contact.whatsappNumberMask}
                <BsPhone size={20} />
            </span>
            <span>
                {contact.gmail}
                <HiOutlineMail size={20} />
            </span>
            <span>
                {company.cnpj}
                <RiSuitcaseLine size={20} />
            </span>
            <span>
                {company.address}
                <BsHouseDoor size={20} />
            </span>
        </CompanyInformationStyled>
    )
}
import styled from 'styled-components';
import Copyright from './Copyright';
import CompanyInformation from './CompanyInformation';

const FooterStyled = styled.footer`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.basics.white};
    display: flex;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 20px;
    @media(max-width: 650px){
        flex-direction: column;
        gap: 20px;
    }
`

export default function Footer(){
    return(
        <FooterStyled className='container sectionFooter'>
            <Copyright />
            <CompanyInformation />
        </FooterStyled>
    )
}
import styled from 'styled-components';

const TitleSectionStyled = styled.h3`
    border-bottom: 1px solid ${({ theme }) => theme.palette.gray.i200};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    margin: 20px 0;
`

export default function TitleSection({ title }){
    return(
        <TitleSectionStyled>
            {title}
        </TitleSectionStyled>
    )
}
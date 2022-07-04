import styled from 'styled-components';

const TitleSectionStyled = styled.h3`
    border-bottom: 1px solid ${({ theme }) => theme.palette.gray.i200};
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.size+'rem'};
    margin: 3% 0 3% 0;
`

export default function TitleSection({ title, size }){
    return(
        <TitleSectionStyled size={size}>
            {title}
        </TitleSectionStyled>
    )
}
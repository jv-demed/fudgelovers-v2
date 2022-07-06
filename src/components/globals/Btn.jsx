import styled from 'styled-components';

const Btn = styled.button`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: none;
    color: ${({ theme }) => theme.palette.basics.white};
    font-family: 'Cairo', sans-serif;
    font-size: 1.2rem;
    padding: 0 20px;
    :hover{
        text-shadow: 1px 1px 1px #000;
    }
`

export default Btn;
import styled from 'styled-components';

const Btn = styled.button`
    align-items: center;
    background-color: rgba(0,0,0,0);
    border: 2px solid ${({ theme }) => theme.palette.basics.white};
    box-shadow: 0px 1px 1px gray;
    color: ${({ theme }) => theme.palette.basics.white};
    display: flex;
    font-family: 'Cairo', sans-serif;
    font-size: 1.2rem;
    gap: 10px;
    padding: 0 20px;
    text-shadow: 1px 1px 1px #000;
    transition: background 0.5s;
    :hover{
        background-color: ${({ theme }) => theme.palette.primary.light};
        text-shadow: none;
    }
    @media(max-width: 650px){
        justify-content: space-between;
        transition: none;
    }
`

export default Btn;
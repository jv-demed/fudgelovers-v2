import styled from 'styled-components';

const ProductBoxBtn = styled.button`
    align-items: center;
    background-color: rgba(0,0,0,0);
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.light};;
    display: flex;
    font-family: 'Cairo', sans-serif;
    font-size: 0.9rem;
    gap: 4px;
    justify-content: center;
    padding: 2px 5px;
    transition: background 0.5s, color 0.5s;
    width: 50%;
    :hover{
        background-color: ${({ theme }) => theme.palette.primary.light};
        color: ${({ theme }) => theme.palette.basics.white};
    }
    @media(max-width: 650px){
        transition: none;
    }
`

export default ProductBoxBtn;
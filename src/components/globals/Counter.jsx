import styled from 'styled-components';

const CounterStyled = styled.div`
    align-items: center;
    border: 1px solid ${({ theme }) => theme.palette.gray.i500};
    display: flex;
    font-family: 'Cairo', sans-serif;
    font-size: 1.2rem;
    gap: 8px;
    padding: 0 4px;
    button{
        background-color: rgba(0,0,0,0);
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        height: 100%;
    }
    span{
        text-align: center;
        width: 25px;
    }
`

export default function Count({ quant, setQuant, max, min }){
    return(
        <CounterStyled>
            <button onClick={() => setQuant(quant > min ? quant-1 : quant)}>-</button>
            <span>{quant}</span>
            <button onClick={() => setQuant(quant < max ? quant+1 : quant)}>+</button>
        </CounterStyled>
    )
}
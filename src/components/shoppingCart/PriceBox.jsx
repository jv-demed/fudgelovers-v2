import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../providers/CartProvider';

const PriceBoxStyled = styled.div`
    background-color: ${({ theme }) => theme.palette.gray.i50};
    display: flex;
    font-family: 'Montserrat', sans-serif;
    padding: 10px;
`

export default function PriceBox(){

    const { getTotal } = useContext(CartContext);

    return(
        <PriceBoxStyled>
            <span><b>Total:</b> R${getTotal()}</span>
        </PriceBoxStyled>
    )
}
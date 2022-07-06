import { useState, useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';
import styled from 'styled-components';
import Counter from '../globals/Counter';

const CartItemStyled = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    img{
        width: 60px;
    }
`

export default function CartItem({ item }){

    const { items, setItems, changeQuant } = useContext(CartContext);
    const [quant, setQuant] = useState(item.quant);

    function teste(sera){
        console.log(sera)
    }

    return(
        <CartItemStyled>
            <img src={item.img} alt={item.name} />
            {item.name}
            <Counter 
                max={10} min={1}
                quant={quant} 
                setQuant={setQuant} 
                onClick={changeQuant(item.name, quant)}
            />
            <span>R${item.value}</span>
            <span>R${item.value * quant}</span>
        </CartItemStyled>
    )
}
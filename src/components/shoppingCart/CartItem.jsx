import styled from 'styled-components';

const CartItemStyled = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    img{
        width: 60px;
    }
`

export default function CartItem({ cartItem }){

    const product = cartItem.payload;

    return(
        <CartItemStyled>
            <img src={product.img} alt={product.name} />
            {product.name}
        </CartItemStyled>
    )
}
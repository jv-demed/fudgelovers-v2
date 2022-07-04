import styled from 'styled-components';
import CarouselProducts from './CarouselProducts';
import { products } from '../../assets/products';

const HighlightsStyled = styled.main`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export default function Highlights({ shoppingCart, setShoppingCart }){

    let news = products.filter((product) => {
        if(product.news){
            return product;
        }
    })
    let highlights = products.filter((product) => {
        if(product.highlight){
            return product;
        }
    })

    return(
        <HighlightsStyled className='container section'>
            <CarouselProducts 
                name='Novidades' 
                productList={news} 
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart} 
            />
            <CarouselProducts 
                name='Destaques' 
                productList={highlights} 
                setShoppingCart={setShoppingCart} 
            />
        </HighlightsStyled>
    )
}
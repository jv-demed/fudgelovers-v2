import styled from 'styled-components';
import CarouselProducts from './CarouselProducts';
import { products } from '../../assets/products';

const HighlightsStyled = styled.main`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export default function Highlights(){

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
        <HighlightsStyled className='container'>
            <CarouselProducts 
                name='Novidades' 
                productList={news} 
            />
            <CarouselProducts 
                name='Destaques' 
                productList={highlights} 
            />
        </HighlightsStyled>
    )
}
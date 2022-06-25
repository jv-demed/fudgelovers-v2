import styled from 'styled-components';
import CarouselProducts from './CarouselProducts';
import { products } from '../../assets/products';

const HighlightsStyled = styled.main`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export default function Highlights(){
    return(
        <HighlightsStyled className='container section'>
            <CarouselProducts name='Novidades' productList={products} />
            <CarouselProducts name='Destaques' productList={products} />
        </HighlightsStyled>
    )
}
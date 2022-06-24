import styled from 'styled-components';
import TitleSection from '../globals/TitleSection';
import CarouselProducts from './CarouselProducts';
import { news } from '../../assets/products';

const HighlightsStyled = styled.main`
    display: flex;
    flex-direction: column;
    height: 200vh;
`

export default function Highlights(){
    return(
        <HighlightsStyled className='container'>
            <TitleSection title='Novidades' />
            <CarouselProducts productList={news} name='news' />
            <TitleSection title='Destaques' />
            <CarouselProducts productList={news} name='high' />
        </HighlightsStyled>
    )
}
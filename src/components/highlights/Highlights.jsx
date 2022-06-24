import styled from 'styled-components';
import TitleSection from '../globals/TitleSection';
import CarouselProducts from './CarouselProducts';
import { news } from '../../assets/products';

const HighlightsStyled = styled.main`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 200vh;
    margin-top: 10px;
`

export default function Highlights(){
    return(
        <HighlightsStyled className='container'>
            <CarouselProducts name='Novidades' productList={news} />
            <CarouselProducts name='Destaques' productList={news} />
        </HighlightsStyled>
    )
}
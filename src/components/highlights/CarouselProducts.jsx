import styled from 'styled-components';
import { useMedia } from 'use-media';
import Carousel from 'react-multi-carousel';
import ProductBox from './ProductBox';
import 'react-multi-carousel/lib/styles.css';

const CarouselProductsStyled = styled.div`
    border: 1px solid red;
    z-index: 1;
    @media(max-width: 650px){
        
    }
`

export default function CarouselProducts({ productList }){
    
    const isMobile = useMedia({ maxWidth: 650 });

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 851 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 850, min: 651 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 650, min: 0 },
            items: 1
        }
    };

    return(
        <CarouselProductsStyled>
            <Carousel 
                centerMode={isMobile ? true : false}
                infinite={true}
                removeArrowOnDeviceType={'mobile'}
                responsive={responsive}
            >
                {productList.map((product, index) => {
                    return(
                        <ProductBox key={index} product={product} />
                    )
                })}
            </Carousel>
        </CarouselProductsStyled>
    )
}
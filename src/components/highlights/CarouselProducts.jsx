import { useMedia } from 'use-media';
import styled from 'styled-components';
import TitleSection from '../globals/TitleSection';
import Carousel from 'react-multi-carousel';
import ProductBox from '../globals/ProductBox';
import 'react-multi-carousel/lib/styles.css';

const CarouselProductsStyled = styled.div`
    z-index: 1;
`

export default function CarouselProducts({ name, productList }){
    
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
            <TitleSection title={name} size={1.5} />
            <Carousel
                centerMode={isMobile ? true : false}
                infinite={true}
                removeArrowOnDeviceType={'mobile'}
                responsive={responsive}
            >
                {productList.map((product, index) => {
                    return(
                        <ProductBox 
                            key={index} 
                            product={product} 
                            size={95}
                        />
                    )
                })}
            </Carousel>
        </CarouselProductsStyled>
    )
}
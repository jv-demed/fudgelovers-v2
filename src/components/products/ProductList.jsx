import { useMedia } from 'use-media';
import styled from 'styled-components';
import ProductBox from '../globals/ProductBox';
import { products } from '../../assets/products';

const ProductListStyled = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 1.33%;
    row-gap: 20px;
`

export default function ProductList(){

    const isMobile = useMedia({ maxWidth: 650 });
    const isTablet = useMedia({ maxWidth: 850 });

    return(
        <ProductListStyled>
            {products.map((product, index) => {
                return(
                    <ProductBox 
                        key={index} 
                        product={product} 
                        size={isMobile ? 49.3 : isTablet ? 32.4 : 24} 
                    />
                )
            })}
        </ProductListStyled>
    )
}
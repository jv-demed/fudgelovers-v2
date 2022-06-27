import { useState } from 'react';
import { useMedia } from 'use-media';
import styled from 'styled-components';
import Categories from './Categories';
import FilterMobile from './FilterMobile';
import ProductBox from '../globals/ProductBox';
import { products } from '../../assets/products';

const ProductListStyled = styled.section`
    display: flex;
    gap: 20px;
    .products{
        display: flex;
        flex-wrap: wrap;
        gap: 1.33%;
        row-gap: 20px;
    }
    @media(max-width: 650px){
        flex-direction: column;
    }
`

export default function ProductList(){

    const isMobile = useMedia({ maxWidth: 650 });
    const isTablet = useMedia({ maxWidth: 850 });
    const [filter, setFilter] = useState('Todos');

    return(
        <ProductListStyled>
            {isMobile ? 
                <FilterMobile setFilter={setFilter} /> 
                :
                <Categories setFilter={setFilter} />
            }
            <div className='products'>
                {products.map((product, index) => {
                    if(product.category == filter || filter == 'Todos'){
                        return(
                            <ProductBox 
                                key={index} 
                                product={product} 
                                size={isMobile ? 49.3 : isTablet ? 32.4 : 24} 
                            />
                        )
                    }
                })}
            </div>
        </ProductListStyled>
    )
}
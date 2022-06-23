import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselStyled = styled.div`
    //border: 1px solid red;
    z-index: 1;
    .productBox{
        //border: 1px solid red;
        background-color: ${({ theme }) => theme.palette.gray.i100};
        height: 300px;
        width: 250px;
        img{
            width: 100%;
        }
        .productInfo{
            display: flex;
            flex-direction: column;
            font-family: 'Montserrat', sans-serif;
            padding: 2px 15px;
        }
    }
    //@media(max-width: 650px){
    //    flex-shrink: 250px;
    //    flex-wrap: wrap;
    //}
`

export default function CarouselP({ productList }){
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 651 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 650, min: 0 },
            items: 2
        }
    };

    return(
        <CarouselStyled>
            <Carousel 
                responsive={responsive}
            >
            {productList.map((product, index) => {
                return(
                    <div className='productBox' key={index}>
                        <img src={product.img} alt={product.desc} />
                        <div className='productInfo'>
                            <span>{product.name}</span>
                            <span>R${product.value}</span>
                        </div>
                    </div>
                )
            })}
            </Carousel>
        </CarouselStyled>
    )
}
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
        width: 95%;
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
    @media(max-width: 650px){
        .productBox{
            margin: 0 auto;
            width: 250px;
        }
    }
`

export default function CarouselP({ productList }){
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 850 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 849, min: 650 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 649, min: 0 },
            items: 1
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
                            <span>{product.nome}</span>
                            <span>R${product.valor}</span>
                        </div>
                    </div>
                )
            })}
            </Carousel>
        </CarouselStyled>
    )
}
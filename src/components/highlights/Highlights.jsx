import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { highlights } from '../../assets/images';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HighlightsStyled = styled.main`

`

export default function Highlights(){
    return(
        <HighlightsStyled>
            <Carousel 
                autoPlay={true}
                infiniteLoop={true}
                interval={1}
                showStatus={false}
                showThumbs={false}
            >
                <div>
                    <img src={highlights.caramelo.img} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={highlights.nozes.img} />
                </div>
            </Carousel>
        </HighlightsStyled>
    )
}
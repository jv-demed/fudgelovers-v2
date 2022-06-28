import { useState } from 'react';
import styled from 'styled-components';
import Btn from '../globals/Btn';

const InfoProductStyled = styled.div`
    display: flex;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    gap: 4%;
    img{
        width: 48%;
    }
    .infoArea{
        display: flex;
        flex-direction: column;
        gap: 20px;
        .purchasingArea{
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            .value{
                font-size: 1.6rem;
            }
            div{
                display: flex;
                gap: 20px;
            }
        }
    }
    @media(max-width: 650px){
        flex-direction: column;
        img{
            margin: 0 auto;
            width: 100%;
        }
        .infoArea{
            margin-top: 20px;
        }
    }
`

export default function InfoProduct({ product }){

    const [quant, setQuant] = useState(1);

    return(
        <InfoProductStyled>
            <img src={product.img} alt={product.name} />
            <div className='infoArea'>
                <div className='purchasingArea'>
                    <span className='value'>R${quant * product.value}</span>
                    <div>
                        <input type='number' 
                            max='10' 
                            min='1' 
                            onChange={(e) => {setQuant(e.target.value)}} 
                            value={quant}
                        />
                        <Btn action='Comprar' />
                    </div>
                </div>
                <span>{product.desc}</span>
            </div>
        </InfoProductStyled>
    )
}
import { useState } from 'react';
import styled from 'styled-components';
import Counter from '../globals/Counter';
import Btn from '../globals/Btn';
import DescProducts from './descProduct';

const InfoProductStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .value{
        font-weight: bold;
        font-size: 1.8rem;
    }
    .actionArea{
        display: flex;
        gap: 20px;
    }
    @media(max-width: 650px){
        gap: 15px;
        margin-top: 10px;
        .value{
            font-size: 2.5rem;
        }
        .actionArea{
            height: 50px;
            div{
                width: 30%;
            }
            button{
                width: 70%;
            }
        }
    }
`

export default function InfoProduct({ product }){

    const [quant, setQuant] = useState(1);

    return(
        <InfoProductStyled>
            <span className='value'>R${quant * product.value}</span>
            <div className='actionArea'>
                <Counter quant={quant} setQuant={setQuant} max={10} min={1} />
                <Btn action='Comprar' />
            </div>
            <DescProducts product={product} />
        </InfoProductStyled>
    )
}
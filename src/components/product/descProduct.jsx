import styled from 'styled-components';
import { infoProducts } from '../../assets/infos';

const DescProductStyled = styled.div`
    @media(max-width: 650px){
        border-top: 1px solid ${({ theme }) => theme.palette.gray.i200};
        font-size: 1.2rem;
        padding-top: 10px;
    }
`

export default function DescProducts({ product }){
    return(
        <DescProductStyled>
            {product.category == 'Fudges' ?
            (<span>
                {infoProducts.fudgeBoxes + product.name + '.'}
                <br/><br/>
            </span>) : ''}
            {product.desc}
            <br/><br/>
            {product.category == 'Caixas Especiais' ?
            (<span>
                <b>Sabores:</b> {product.flavors}
                <br/><br/>
            </span>) : ''}
            {infoProducts.art}
            <br/><br/>
            {infoProducts.gAprox}300g.
        </DescProductStyled>
    )
}
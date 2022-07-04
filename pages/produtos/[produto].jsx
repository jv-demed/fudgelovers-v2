import styled from 'styled-components';
import TitleSection from '../../src/components/globals/TitleSection';
import InfoProduct from '../../src/components/product/InfoProduct';
import { products } from '../../src/assets/products';

const ProdutoStyled = styled.section`
    padding-top: 20px;
    .infoProduct{
        display: flex;
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        gap: 4%;
        img{
            width: 48%;
        }
    }
    @media(max-width: 650px){
        .infoProduct{
            flex-direction: column;
            img{
                margin: 0 auto;
                width: 100%;
            }
        }
    }
`

export default function Produto(props){
    return(
        <ProdutoStyled className='container'>
            <TitleSection title={props.name} size={2} />
            <div className='infoProduct'>
                <img src={props.img} alt={props.name} />
                <InfoProduct product={props} />
            </div>
        </ProdutoStyled>
    )
}

export async function getServerSideProps(context){
    const product = products.find((product) => {
        if(product.name == context.params.produto){
            return product;
        }
    })
    return {
        props: product
    }
}
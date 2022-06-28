import styled from 'styled-components';
import TitleSection from '../../src/components/globals/TitleSection';
import InfoProduct from '../../src/components/product/InfoProduct';
import { products } from '../../src/assets/products';

const ProdutoStyled = styled.section`
    padding-top: 20px;
    .infoProduct{
        display: flex;
        gap: 4%;
        img{
            width: 48%;
        }
    }
`

export default function Produto(props){
    return(
        <ProdutoStyled className='container'>
            <TitleSection title={props.name} size={2} />
            <InfoProduct product={props} />
        </ProdutoStyled>
    )
}

export async function getServerSideProps(context){
    console.log(context.params.produto)
    const product = products.find((product) => {
        if(product.name == context.params.produto){
            return product;
        }
    })
    return {
        props: product,
    }
}
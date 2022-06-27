import styled from 'styled-components';
import TitleSection from '../src/components/globals/TitleSection';
import ProductList from '../src/components/products/ProductList';

const ProdutosStyled = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    .productList{
        border: 1px solid red;
        display: flex;
        flex-wrap: wrap;
        div{
            width: 22%;
        }
    }
`

export default function Produtos(){
    return(
        <ProdutosStyled className='container'>
            <TitleSection title='Produtos' size={2} />
            <ProductList />
        </ProdutosStyled>
    )
}
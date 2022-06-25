import styled from 'styled-components';
import ProductBoxBtn from './ProductBoxBtn';
import { FaRegEye } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

const ProductBoxStyled = styled.div`
    background-color: ${({ theme }) => theme.palette.gray.i50};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: ${props => props.size+'%'};
    img{
        width: 100%;
    }
    .productInfo{        
        font-family: 'Montserrat', sans-serif;
        padding: 5px 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .btnArea{
        display: flex;
        .border{
            border-right: 1px solid ${({ theme }) => theme.palette.gray.i200};
        }
    }
`

export default function ProductBox({ product, size}){
    return(
        <ProductBoxStyled size={size}>
            <div>
                <img src={product.img} alt={product.name} />
                <div className='productInfo'>
                    <span>{product.name}</span><br />
                    <span>R${product.value}</span>
                </div>
            </div>
            <div className='btnArea'>
                <ProductBoxBtn className='border'>
                    Detalhes
                    <FaRegEye />
                </ProductBoxBtn>
                <ProductBoxBtn>
                    Comprar
                    <FiShoppingCart />
                </ProductBoxBtn>
            </div>
        </ProductBoxStyled>
    )
}
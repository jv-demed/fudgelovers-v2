import Link from 'next/link';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ProductBoxBtn from './ProductBoxBtn';
import { FaRegEye } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { store } from '../../redux/store';
import { addItem } from '../../redux/cartSlice';

const ProductBoxStyled = styled.div`
    background-color: ${({ theme }) => theme.palette.gray.i50};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

export default function ProductBox({ product, size, shoppingCart, setShoppingCart}){

    return(
        <ProductBoxStyled size={size}>
            <div>
                <Link href={'/produtos/'+product.name}>
                    <img src={product.img} alt={product.name} />
                </Link>
                <div className='productInfo'>
                    <span>{product.name}</span><br />
                    <span>R${product.value}</span>
                </div>
            </div>
            <div className='btnArea'>
                <Link href={'/produtos/'+product.name}>
                    <ProductBoxBtn className='border'>
                        Detalhes
                        <FaRegEye />
                    </ProductBoxBtn>
                </Link>
                <ProductBoxBtn
                    onClick={() => {
                        //setShoppingCart(shoppingCart => [...shoppingCart, product]);
                        store.dispatch(addItem(product))
                    }}
                >
                    Comprar
                    <FiShoppingCart />
                </ProductBoxBtn>
            </div>
        </ProductBoxStyled>
    )
}
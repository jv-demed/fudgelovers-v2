import { useContext } from 'react';
import Link from 'next/link';
import { CartContext } from '../../providers/CartProvider';
import styled from 'styled-components';
import ProductBoxBtn from './ProductBoxBtn';
import { FaRegEye } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

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

export default function ProductBox({ product, size}){

    const { items, setItems } = useContext(CartContext);

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
                <ProductBoxBtn onClick={() => {
                    setItems((items) => [...items, {
                        name: product.name,
                        img: product.img,
                        value: product.value,
                        quant: 1,
                    }])
                }}>
                    Comprar
                    <FiShoppingCart />
                </ProductBoxBtn>
            </div>
        </ProductBoxStyled>
    )
}
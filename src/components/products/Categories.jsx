import styled from 'styled-components';
import TitleSection from '../globals/TitleSection';
import { categories } from '../../assets/products';

const CategoriesStyled = styled.aside`
    font-family: 'Montserrat', sans-serif;
    min-width: 18%;
    ul{
        display: flex;
        flex-direction: column;
        font-weight: bold;
        gap: 10px;
        margin-top: 10px;
        li{
            cursor: pointer;
        }
        li.select{
            text-decoration: underline;
        }
    }
`

export default function Categories({ filter, setFilter }){
    return(
        <CategoriesStyled>
            <TitleSection title='CATEGORIAS' size={0.9} />
            <ul>
                {categories.map((category, index) => {
                    return(
                        <li key={index}
                            className={filter == category ? 'select' : ''}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </li>
                    )
                })}
            </ul>
        </CategoriesStyled>
    )
}
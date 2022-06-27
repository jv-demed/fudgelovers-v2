import styled from 'styled-components';
import FilterBtn from '../globals/FilterBtn';
import { categories } from '../../assets/products';

const FilterMobileStyled = styled.aside`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    .select{
        background-color: ${({ theme }) => theme.palette.primary.light};
        border: none;
        color: ${({ theme }) => theme.palette.basics.white};
        transition: 0.2s;
    }
`

export default function FilterMobile({ filter, setFilter }){
    return(
        <FilterMobileStyled>
            {categories.map((category, index) => {
                return(
                    <FilterBtn 
                        className={filter == category ? 'select' : ''}
                        onClick={() => setFilter(category)}
                        
                    >
                        {category}
                    </FilterBtn>
                )
            })}
        </FilterMobileStyled>
    )
}
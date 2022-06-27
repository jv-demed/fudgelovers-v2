import styled from 'styled-components';
import FilterBtn from '../globals/FilterBtn';
import { categories } from '../../assets/products';

const FilterMobileStyled = styled.aside`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`

export default function FilterMobile({ setFilter }){
    return(
        <FilterMobileStyled>
            {categories.map((category, index) => {
                return(
                    <FilterBtn onClick={() => setFilter(category)}>
                        {category}
                    </FilterBtn>
                )
            })}
        </FilterMobileStyled>
    )
}
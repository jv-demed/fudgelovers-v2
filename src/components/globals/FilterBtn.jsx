import styled from 'styled-components';

const FilterBtn = styled.button`
    background-color: rgba(0,0,0,0);
    border: 1px solid ${({ theme }) => theme.palette.gray.i500};
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    padding: 2px 6px;
`

export default FilterBtn;
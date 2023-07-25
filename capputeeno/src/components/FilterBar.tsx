"use client"

import { FilterByPriority } from "./FilterByPriority";
import { FilterByType } from "./FilterByType";
import { styled } from "styled-components"

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export function FilterBar(props: FilterBarProps) {
    return (
        <FilterContainer>
            <FilterByType />
            <FilterByPriority />
        </FilterContainer>
    )
}
"use client"

import { styled } from 'styled-components';
import { ArrowIcon } from './icons/ArrowIcon';
import {useState} from 'react';
import { useFilter } from '@/hooks/useFilter';
import { PriorityTypes } from '@/types/priority-types';

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;

        color: var(--text-dark);
        background: transparent;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        svg {
            margin-left: 16px;
        }
    }
`

const PriorityFilter = styled.ul`
    position: absolute;
    width: 250px;
    background: #FFFFFF;
    padding: 12px 16px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    z-index: 999;

    list-style: none;

    top: 100%;

    li {
        color: var(--text-dark);
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`

export function FilterByPriority(props: FilterByPriorityProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter()

    const handleOpen = () => setIsOpen(prev => !prev);

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
        setIsOpen(false)
    }

    return (
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon />
            </button>
            {isOpen && (
                <PriorityFilter>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>
            )}
        </FilterContainer>
    )
}
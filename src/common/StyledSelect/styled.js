import styled from "styled-components";

const StyledSelect = styled.select`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.select.background};
    color: ${({ theme }) => theme.colors.select.text};
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    padding: 5px 15px;
    margin: 5px;
    transition: 1s;
    
    &:hover:enabled {
        background-color: ${({ theme }) => theme.colors.primary};
        transform: scale(1.1);
    }
    
    &:disabled {
        cursor: default;
        background-color: ${({ theme }) => theme.colors.disabled};
    }
`;

export default StyledSelect;
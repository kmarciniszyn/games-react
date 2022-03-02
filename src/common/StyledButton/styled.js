import styled from "styled-components";

const StyledButton = styled.button`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
    border: none;
    border-radius: 5px;
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

export default StyledButton;
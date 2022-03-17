import styled from "styled-components";

export const Wrapper = styled.div`
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: 0.5s;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
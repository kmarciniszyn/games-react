import styled, { css } from "styled-components";
import { ReactComponent as Icon } from "./flag.svg";

export const StyledFlagIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.textPrimary};
    height: 50px;

    ${({ resizable }) => resizable && css`

        @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
            height: 18px;
        }
    `}    
`;
import styled from "styled-components";
import { ReactComponent as Icon } from "./watch.svg";

export const StyledWatchIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.textPrimary};
    height: 50px;
`;
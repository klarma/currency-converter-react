import styled from "styled-components";

export const StyledResult = styled.p`
    font-size: 25px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;
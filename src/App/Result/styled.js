import styled from "styled-components";

export const StyledResult = styled.div`
    font-size: 25px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;

export const Note = styled.p`
    font-size: 11px;
    color: ${({ theme }) => theme.color.silverChalice};
`;
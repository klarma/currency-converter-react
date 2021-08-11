import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    margin-top: 20px;
    padding: 5px 15px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 8px;

    ${({ smaller }) => smaller && css`
        min-height: 22vh;     

        @media(max-width: 767px) {
            min-height: 30vh;
        }
    `} 
`;

export const Header = styled.h2`
    padding: 15px;
`;
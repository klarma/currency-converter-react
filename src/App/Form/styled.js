import styled from "styled-components";

export const LabelText = styled.span`
    display: inline-block;
    width: 100%;
    text-align: left;
    max-width: 150px;
    margin-right: 15px;
    padding-bottom: 5px;
`;

export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    width: 100%;
    max-width: 400px;
`;

export const Button = styled.button`
    width: 100%;
    max-width: 90%;
    border: none;
    background-color: ${({ theme }) => theme.color.cabaret};
    color: ${({ theme }) => theme.color.white};
    margin-top: 10px;
    padding: 7px;

    &:hover{
        cursor: pointer;
        filter: brightness(110%);
    };

    &:active{
        filter: brightness(120%);
    }
`;
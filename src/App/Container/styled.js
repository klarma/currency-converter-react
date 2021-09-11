import styled from "styled-components";
import LoadingImage from "../../loading.gif";

export const Loading = styled.div`
    margin: 120px auto;
    color: #eee;
    font-size: 18px;
    line-height: 2;
    padding: 80px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 8px;

    @media (max-width: 767px){
        margin: 40px auto;
        font-size: 14px;
        padding-bottom: 10px;
    }
`;

export const StyledImage = styled.img.attrs({
    src: LoadingImage,
})`
        width: 100px;
        padding-top: 20px;
`;

export const Failure = styled.div`
    margin: 120px auto;
    color: #eee;
    font-size: 18px;
    line-height: 2;
    padding: 80px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 8px;

    @media (max-width: 767px){
        margin: 40px auto;
        font-size: 14px;
    }
`;
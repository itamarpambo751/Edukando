import styled from "styled-components"

export default function TitleSpan({ children }) {
    return (
        <StyledSpan>
            { children }
        </StyledSpan>
    )
}

const StyledSpan = styled.span`
    background-color: #E7DEFF;
    padding: 5px 23px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 20px;
    color: #5F2DED;
` 
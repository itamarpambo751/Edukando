import styled from "styled-components"

export default function HeightBefore({ children }) {
    return <Text>{children}</Text>
}
const Text = styled.span`
    display: block;
    background: var(--whiteColor);
    display: flex;
    border-left: 5px solid var(--primaryColor);
    max-width: 100%;
    align-items: center;
    justify-content: center;
    padding: 25px 10px;
    position: absolute;
    left: 0;
    box-shadow: 0 0 50px 10px rgba(95, 45, 237, 0.15);
    animation: move5 3s infinite linear;
`
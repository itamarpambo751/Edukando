import styled from "styled-components";

export const Button = styled.button(({ 
    color, bg, countBg, border, countColor 
}) => `
    padding: 10px;
    border-radius: .25rem;
    position: relative;
    display: flex;
    color: ${color ? color:'black' };
    justify-content: center;
    align-items: center;
    background: ${bg ? bg:'var(--primaryColor)'};
    border: ${border ? '1px solid var(--bodyColor)':'none'};
    height: 45px;
    .count {
        position: absolute;
        width: 20px;
        height: 20px;
        background: ${countBg ? countBg:'var(--whiteColor)'};
        color: ${countColor ? countColor:'black'};
        top: -5px;
        right: -5px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
    }
    svg {
        font-size: 20px;
    }
`)
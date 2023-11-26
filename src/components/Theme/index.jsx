import { BsMoon } from "react-icons/bs"
import styled from "styled-components"

import { useState, useEffect } from "react"

function OnChangeColorTheme() {
    if (localStorage.getItem("theme-color") === "light") {
        localStorage.setItem("theme-color", "dark")
        document.documentElement.classList.add("is_dark")
    } else {
        localStorage.setItem("theme-color", "light")
        document.documentElement.classList.remove("is_dark")
    }
}
function OnInitGetCurretColorTheme() {
    return localStorage.getItem("theme-color")
}
export default function ToggleThemeButton() {
    useEffect(() => {
        if (localStorage.getItem("theme-color") === "dark" || (!("theme-color" in localStorage))) {
            document.documentElement.classList.add("is_dark")
        }
    }, [])
    return(
        <LightOrDarkButton onClick={OnChangeColorTheme}>
            <i>
                <BsMoon />
            </i>
            <span>
                Dark
            </span>
        </LightOrDarkButton>
    )
}

const LightOrDarkButton = styled.button(({ theme }) => `
    position: fixed;
    right: 0;
    top: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 15px;
    width: 80px;
    height: 40px;
    border-radius: 15px 0 0 15px;
    gap: .2rem;
    background-color: var(--primaryColor);
    color: #FFF;
    cursor: pointer;
    transition: all.2s ease-in-out;
`)
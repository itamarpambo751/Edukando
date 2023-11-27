import { BsMoon, BsSun } from "react-icons/bs"
import styled from "styled-components"

import { useState, useEffect, useCallback } from "react"

export default function ToggleThemeButton() {
    const loadLocalStorageThemeData = useCallback(() => {
        return localStorage.getItem("theme-color")
    }, [])
    const [colorTheme, setColorTheme] = useState(() => loadLocalStorageThemeData())
    useEffect(() => {
        if (localStorage.getItem("theme-color") === "Dark" || (!("theme-color" in localStorage))) {
            document.documentElement.classList.add("is_dark")
        }
    }, [])
    useEffect(() => {
        if (localStorage.getItem("theme-color") === "Light") {
            localStorage.setItem("theme-color", "Dark")
            document.documentElement.classList.add("is_dark")
        } else {
            localStorage.setItem("theme-color", "Light")
            document.documentElement.classList.remove("is_dark")
        }
    }, [colorTheme])
    return(
        <LightOrDarkButton onClick={() => setColorTheme(colorTheme === "Light" ? "Dark":"Light")} theme={colorTheme}>
            <i>
                {colorTheme === "Light" ? <BsMoon />:<BsSun />}
            </i>
            <span>
                {colorTheme === "Light" ? "Dark":"Light"}
            </span>
        </LightOrDarkButton>
    )
}

const LightOrDarkButton = styled.button(({ theme }) => ` 
    position: fixed;
    right: -50px;
    top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 15px;
    width: 80px;
    height: 40px;
    border-radius: 15px 0 0 15px;
    gap: .2rem;
    background-color: ${theme === "Light" ? "var(--primaryColor)":"var(--darkdeep3)"};
    color: #FFF;
    cursor: pointer;
    transition: all.2s ease-in-out;
    &:hover {
        right: 0;
    }
    i {
        margin-top: .3rem;
    }
`)
import styled from "styled-components"

export const StyledHeader = styled.header`
    width: 100%;
    height: 110px;
    background: #fff;
    display: flex;
    align-items: center;
    div.container {
        padding-top: .5rem;
        width: 85%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .header-right-side {
            display: flex;
            align-items: center;
            gap: 10rem;
            nav ul {
                display: flex;
                gap: 3rem;
                li a {
                    color: var(--blackColor);
                }
            }
            .account-section {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: .7rem;
                .menu-list {
                    display: none;
                    padding-top: 1.2rem;
                    .icon-list-size {
                        transform: scale(1.5);
                    }
                }
            }
        }
    }
    @media (max-width: 1365px) {
        height: 4rem;
        div.container {
            img {
                width: 150px;
            }
            width: 100%;
            padding: .1rem 2rem;
            .header-right-side {
                nav ul {
                    li a {
                        font-size: 15px;
                    }
                }
                .account-section {
                    gap: .5rem;
                    button {
                        font-size: 15px;
                        height: 35px;
                    }
                }
            }
        }
    }
    @media (max-width: 1105px) {
        background: transparent;
        div.container {
            .header-right-side {
                nav {
                    display: none;
                }
                .account-section {
                    .btn-hide {
                        display: none;
                    }
                    .menu-list {
                        font-size: 2rem;
                        display: flex;
                    }
                }
            }
        }
    }
`

export const StyledDrawer = styled.div`
    width: 300px;
    background: #FFF;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    padding: 20px;
    box-shadow: 0px 50px 50px 50px rgba(0, 0, 0, .05);
    .btn-close {
        position: absolute;
        left: -40px;
        width: 40px;
        height: 40px;
        top: 0;
        background-color: #222;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    
`
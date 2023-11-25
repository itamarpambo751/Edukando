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
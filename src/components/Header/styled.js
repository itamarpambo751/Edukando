import styled from "styled-components"

export const StyledHeader = styled.header`
    width: 100%;
    height: 110px;
    background: #fff;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 10000;
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
            padding: .1rem 1rem;
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
        background: var(--bodyBg);
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
    width: 290px;
    background: #FFF;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    padding: 25px;
    box-shadow: 0px 50px 50px 50px rgba(0, 0, 0, .05);
    .btn-close {
        position: absolute;
        left: -40px;
        width: 40px;
        height: 40px;
        top: 0;
        background-color: var(--darkblack);
        color: white;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        i svg {
            scale: 1.6;
        } 
    }
    .context-menu {
        .context-menu_top {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 40px;
            border-bottom: 1px solid var(--whitegrey1);
            form {
                display: flex;
                width: 100%;
                height: 50px;
                background-color: var(--whitegrey2);
                justify-content: flex-start;
                align-items: center;
                input {
                    background-color: var(--whitegrey2);
                    padding: 0 15px;
                    font-size: 14px;
                    flex: 1;
                }
                button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 0;
                    border-left: 1px solid var(--whitegrey1);
                    i {
                        scale: .9;
                        padding-top: .3rem;
                    }
                }
            }
        }
        .navigation {
            margin-top: 30px;
            nav ul li {
                position: relative;
                height: 40px;
                a {
                    padding: 8px 0;
                    position: absolute;
                    color: var(--blackColor2);
                    width: 100%;
                    height: 100%;
                    transition: .3s;
                    font-weight: 500;
                    &:hover {
                        color: var(--secondaryColor);
                    }
                }
            }
            nav {
                padding-bottom: 30px;
                border-bottom: 1px solid var(--whitegrey1);
            }
            .social_networks {
                margin-top: 40px;
                display: flex;
                justify-content: flex-start;
                gap: .2rem;
            }
        }
    }
`
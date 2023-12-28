import {
    BsCart3, BsFacebook, BsInstagram, BsList, BsMenuApp, BsPencilFill, BsPeopleFill, BsPersonFill, BsPinterest, BsSearch, BsTwitter, BsX, BsYoutube
} from "react-icons/bs"
import logo from "../../assets/images/logo.png"
import { Button } from "../Button";
import { useState } from "react";
import styled from "styled-components";

export function Header() {
    const [menuHidden, setMenuHidden] = useState(false)
    return(
        <>
            <StyledHeader>
                <HeaderTopStyled>

                </HeaderTopStyled>
                <div className="container">
                    <img src={logo} alt="logo" />
                    <div className="header-right-side">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Início</a>
                                </li>
                                <li>
                                    <a href="#">Como usar?</a>
                                </li>
                                <li>
                                    <a href="#">Cursos</a>
                                </li>
                                <li>
                                    <a href="#">Open source</a>
                                </li>
                                <li>
                                    <a href="#">Contactos</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="account-section">
                            <Button color="#fff" className="btn-hide">
                                <BsPencilFill />
                                Inscrever
                            </Button>
                            <Button onClick={() => setMenuHidden(true)} className="menu-list" bg="transparent">
                                <i className="icon-list-size">
                                    <BsList />
                                </i>
                            </Button>
                        </div>
                    </div>
                </div>
            </StyledHeader>
            {menuHidden && (
                <StyledDrawer className="animate-right" id="drawer">
                    <div className="btn-close" onClick={(e) => {
                        document.querySelector('#drawer').classList.replace('animate-right', 'anime-close-right')
                        setTimeout(() => {
                            setMenuHidden(false)
                        }, 200);
                    }}>
                        <i>
                            <BsX />
                        </i>
                    </div>
                    <div className="context-menu">
                        <img src={logo} alt="logo" />
                        <div className="context-menu_top">
                            <form>
                                <input type="search" placeholder="Procure por um curso..."/>
                                <Button bg="transparent">
                                    <i>
                                        <BsSearch />
                                    </i>
                                </Button>
                            </form>
                        </div>
                        <div className="navigation">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#">Início</a>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                    </li>
                                    <li>
                                        <a href="#">Cursos</a>
                                    </li>
                                    <li>
                                        <a href="#">Ecomerce</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav>
                                <br />
                                <ul>
                                    <li>
                                        <a href="#">Minha Conta</a>
                                    </li>
                                </ul>
                            </nav>
                            <ul className="social_networks">
                                <li>
                                    <Button bg="transparent" color="var(--facebookColor)">
                                        <i>
                                            <BsFacebook />
                                        </i>
                                    </Button>
                                </li>
                                <li>
                                    <Button bg="transparent" color="#55acee">
                                        <i>
                                            <BsTwitter />
                                        </i>
                                    </Button>
                                </li>
                                <li>
                                    <Button bg="transparent" color="var(--darkcolor)">
                                        <i>
                                            <BsPinterest />
                                        </i>
                                    </Button>
                                </li>
                                <li>
                                    <Button bg="transparent" color="var(--secondaryColor)">
                                        <i>
                                            <BsInstagram />
                                        </i>
                                    </Button>
                                </li>
                                <li>
                                    <Button bg="transparent" color="var(--secondaryColor3)">
                                        <i>
                                            <BsYoutube />
                                        </i>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </StyledDrawer>
            )}
        </>
    )
}

export const StyledHeader = styled.header`
    margin-top: -2px;
    width: 100%;
    height: 140px;
    background: var(--whiteColor);
    display: flex;
    flex-direction: column;
    position: sticky;
    top: -2px;
    z-index: 9999;
    align-items: center;
    box-shadow: 0 0 50px 10px rgba(95, 45, 237, 0.15);  
    div.container {
        width: 85%;
        padding-top: 1.1rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .header-right-side {
            display: flex;
            align-items: center;
            gap: 4rem;
            nav ul {
                display: flex;
                gap: 3rem;
                li a {
                    color: var(--blackColor);
                }
            }
            nav ul li {
                font-weight: 600;
                &:hover a {
                    color: var(--primaryColor);
                }
            }
            .account-section {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: .7rem;
                .btn-cart3 .cart3 {
                    color: var(--bodyColor);
                }
                .menu-list {
                    display: none;
                    padding-top: 1.2rem;
                    
                    .icon-list-size {
                        transform: scale(1.5);
                        color: var(--bodyColor);
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
        /* background: var(--bodyBg); */
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
    background: var(--whiteColor);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    padding: 25px;
    box-shadow: 0px 50px 50px 50px rgba(95, 45, 237, 0.15);
    z-index: 10000;
    .btn-close {
        position: absolute;
        left: -40px;
        width: 40px;
        height: 40px;
        top: 0;
        background-color: var(--darkblack);
        color: var(--bodyBg);
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
                background-color: var(--whitegrey3);
                justify-content: flex-start;
                align-items: center;
                input {
                    background-color: var(--whitegrey3);
                    padding: 0 15px;
                    font-size: 14px;
                    flex: 1;
                    color: var(--bodyColor);
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
                        color: var(--bodyColor);
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

const HeaderTopStyled = styled.div`
background-color: /* #612FEE */#000;
height: 50px;
width: 100%;
`
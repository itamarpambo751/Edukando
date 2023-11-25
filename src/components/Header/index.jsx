import { StyledDrawer, StyledHeader } from "./styled";
import {
    BsCart3, BsFacebook, BsInstagram, BsList, BsMenuApp, BsPencilFill, BsPeopleFill, BsPersonFill, BsPinterest, BsSearch, BsTwitter, BsX, BsYoutube
} from "react-icons/bs"
import logo from "../../assets/images/logo.png"
import { Button } from "../Button";
import { useState } from "react";

export function Header() {
    const [menuHidden, setMenuHidden] = useState(false)
    return(
        <>
            <StyledHeader>
                <div className="container">
                    <img src={logo} alt="logo" />
                    <div className="header-right-side">
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
                                    <a href="#">Ecommerce</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="account-section">
                            <Button 
                                bg="transparent" 
                                countBg="var(--secondaryColor)" 
                                countColor="#fff"
                            >
                                <div className="count">
                                    3
                                </div>
                                <BsCart3 />
                            </Button>
                            <Button bg="transparent" border className="btn-hide">
                                <BsPersonFill />
                            </Button>
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
                <StyledDrawer className="animate-right">
                    <div className="btn-close" onClick={() => setMenuHidden(false)}>
                        <i>
                            <BsX />
                        </i>
                    </div>
                    <div className="context-menu">
                        <div className="context-menu_top">
                            <form>
                                <input type="text" placeholder="Procure por um curso..."/>
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
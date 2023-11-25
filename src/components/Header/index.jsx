import { StyledHeader } from "./styled";
import {
    BsCart3, BsList, BsMenuApp, BsPencilFill, BsPeopleFill, BsPersonFill
} from "react-icons/bs"
import logo from "../../assets/images/logo.png"
import { Button } from "../Button";

export function Header() {
    return(
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
                        <Button className="menu-list" bg="transparent">
                            <i className="icon-list-size">
                                <BsList />
                            </i>
                        </Button>
                    </div>
                </div>
            </div>
        </StyledHeader>
    )
}
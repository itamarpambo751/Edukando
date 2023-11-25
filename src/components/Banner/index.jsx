import { StyledBanner } from "./styled";
import { Button } from "../Button"
import bannerImage from "../../assets/images/about_8.png"

export function Banner() {
    return(
        <StyledBanner>
            <div className="left_side">
                <span>
                    Education
                </span>
                <h1>Cloud-based LMS Trusted by 1000+</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been
                </p>
                <form>
                    <input type="text" placeholder="Your email adress"/>
                    <Button color="#FFF">
                        Sign Up
                    </Button>
                </form>
            </div>
            <div className="right_side">
                <img src={bannerImage} alt="" />
            </div>
        </StyledBanner>
    )
}
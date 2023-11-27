import styled from "styled-components"
import img1 from "../../assets/images/register/register__2.png"
import img2 from "../../assets/images/herobanner/herobanner__6.png"
import img3 from "../../assets/images/herobanner/herobanner__7.png"

export default function FloatintIcons() {
    return(
        <HeroBannerAreaIcon class="herobannerarea__icon">
            <img class="hero__icon__1" src={img1} alt="photo"/>
            <img class="hero__icon__2" src={img2} alt="photo"/>
            <img class="hero__icon__3" src={img3} alt="photo"/>
            <img class="hero__icon__4" src={img3} alt="photo"/>
        </HeroBannerAreaIcon>
    )
}

const HeroBannerAreaIcon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px 70px;
    img {
        width: 50px;
        &:not(:nth-child(1)) {
            animation: translating 7s infinite;
        }
    }
    .hero__icon__1 {
        position: absolute;
        top: 75%;
        left: 50%;
        animation: rotate360 40s infinite ease-in-out;
    }
    @keyframes translating {
        0% {
            margin-left: 0;
        } 50% {
            margin-left: 20px;
        } 100% {
            margin-left: 0;
        }  
    } 
    @keyframes rotate360 {
        0% { transform: rotateZ(0deg) }
        50% {
            transform: rotateZ(1440deg);
        } 100% {
            transform: rotateZ(0deg);
        }
    }  
`
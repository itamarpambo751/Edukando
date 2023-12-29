import styled from "styled-components";
import videoIcon from "../../assets/images/icon/video.png"
import FloatintIcons from "../FloatingIcons";

import img1 from "../../assets/images/register/register__1.png"
import img2 from "../../assets/images/register/register__2.png"
import img3 from "../../assets/images/register/register__3.png"
import you from "../../assets/images/about/education__13.png"
import youBack from "../../assets/images/about/about_8.png"
import TitleSpan from "../TitleSpan";
import { BsArrowRight } from "react-icons/bs";

export function BannerTop() {
    return(
        <StyledBanner>
            <div id="banner_shadow">
                <div className="container">
                    <div className="container-left">
                        <FloatingIconsTopCollection>
                            <img className="register__1" src={img1} alt="register"/>
                            <img className="register__2" src={img2} alt="register"/>
                            <img className="register__3" src={img3} alt="register"/>
                        </FloatingIconsTopCollection>
                        <TitleSpan>Edukando</TitleSpan>
                        <h1>Transforme as suas
                            <TextDecoration> Ideias</TextDecoration> em 
                            <TextDecoration> Impacto Exponencial </TextDecoration><br className="breaker"/> 
                            na Edukando
                        </h1>
                        <div className="registerarea__video">
                            <div>
                                <div className="video__pop__btn">
                                    <a className="video-btn" href="https://www.youtube.com/watch?v=vHdclsdkp28">
                                        <img src={videoIcon} alt="" />
                                    </a>
                                </div>
                            </div>
                            <p>
                                Publique suas video aulas e tutoriais e transforme-se em um professor virtual e prospere! 
                            </p>
                        </div>
                        <ButtonsGroup>
                            <button>
                                Quero me inscrever
                            </button>
                            <button>
                                Explorar
                                <i>
                                    <BsArrowRight/>
                                </i>
                            </button>
                        </ButtonsGroup>
                    </div>
                    <div className="container-right">
                        <img src={you} alt="" className="you"/>
                        <img src={youBack} alt="" className="youBack"/>
                    </div>
                </div>
            </div>
            <FloatintIcons />
        </StyledBanner> 
    )
}

const StyledBanner = styled.div`
    padding-top: 30px;
    margin: 0 auto;
    width: 100%;
    height: 673px;
    display: flex;
    position: relative;
    background-color: var(--banner);
    h1 {
        color: #612FEE;
        font-size: 45px;
        width: 640px;
        line-height: 50px;
        font-weight: 800;
        margin-top: 25px;
    }
    #banner_shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        .container {
            display: flex;
            width: 85%;
            padding-top: 90px;
            margin: 0 auto;
            @media (max-width: 1280px) {
                width: 95%;
            }
            .container-left {
                z-index: 5;
            }
            .you {
                width: 37%;
                z-index: 888;
                position: absolute;
                top: 0;
                @media (max-width: 1296px) {
                    left: 650px;
                }
                @media (max-width: 1280px) {
                    left: 600px;
                    width: 450px;
                }
            }
            .youBack {
                position: absolute;
                @media (max-width: 1296px) {
                    left: 650px;
                }
                @media (max-width: 1280px) {
                    left: 650px;
                }
                @media (max-width: 1104px) {
                    left: 500px;
                    z-index: 1;
                }
            }
            @media (max-width: 1074px) {
                .you {
                    left: 550px;
                }
                .youBack {
                    left: 500px;
                }
            }
            @media (max-width: 1050px) {
                .you {
                    display: none;
                }
                .youBack {
                    display: none;
                }
            }
            .registerarea__video {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 1rem;
                width: 640px;
                margin-top: 30px;
                .video__pop__btn {
                    width: 70px;
                    min-height: 70px;
                    max-height: 70px;
                    background: #F2277E;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: calc(70px/2);
                }
                p {
                    font-weight: 400;
                    font-size: 17px;
                    padding-right: 30px;
                    color: #919191;
                    @media (max-width: 1296px) {
                        font-size: 14px;
                        width: 500px;
                    }
                    @media (max-width: 1074px) {
                        width: 410px;
                    }
                }
            }
        }
    }
    @media (max-width: 1050px) {
        width: 90%;
        h1 {
            width: 100%;
            text-align: center;
            .breaker {
                display: none;
            }
        }
        #banner_shadow {
            .container {
                width: 95%;
                .registerarea__video {
                    width: 100%;
                    margin-top: 20px;
                    .video__pop__btn {
                        width: 60px;
                        min-height: 60px;
                        max-height: 60px;
                        border-radius: calc(60px/2);
                    }
                    p {
                        font-size: 15px;
                        width: 100%;
                    }
                }
            }
        }
    }
    @media (max-width: 700px) {
        width: 90%;
        h1 {
            width: 100%;
            line-height: 40px;
            font-size: 40px;
            text-align: center;
            .breaker {
                display: none;
            }
        }
        #banner_shadow {
            .container {
                .container-left {
                    button {
                        padding: 5px 15px;
                    }
                }
                width: 95%;
                .registerarea__video {
                    width: 100%;
                    margin-top: 20px;
                    .video__pop__btn {
                        width: 60px;
                        min-height: 60px;
                        max-height: 60px;
                        border-radius: calc(60px/2);
                    }
                    p {
                        font-size: 15px;
                        width: 100%;
                    }
                }
            }
        }
    }
    @media (max-width: 689px) {
        h1 {
            font-size: 37px;
        }
    }
    @media (max-width: 453px) {
        h1 {
            width: 100%;
            line-height: 40px;
            font-size: 40px;
            .breaker {
                display: none;
            }
        }
        #banner_shadow {
            .container {
                width: 95%;
                .registerarea__video {
                    width: 100%;
                    margin-top: 20px;
                    .video__pop__btn {
                        width: 60px;
                        min-height: 60px;
                        max-height: 60px;
                        border-radius: calc(60px/2);
                    }
                    p {
                        font-size: 15px;
                        width: 100%;
                    }
                }
            }
        }
    }
`
const TextDecoration = styled.small`
    color: #F2277E;
    font-size: 45px;
    @media (max-width: 700px) {
        font-size: 35px;
    }
`
const FloatingIconsTopCollection = styled.div`
    position: absolute;
    top: 100px;
    left: 100px;
    .register__1 {
        position: absolute;
        margin-left: 20px;
        animation: translating_left 10s infinite;
    }
    .register__2 {
        position: absolute;
        margin-left: 20px;
        animation: rotate360 40s infinite;
    }
    .register__3 {
        position: absolute;
        margin-left: 20px;
        animation: translating_top 10s infinite;
    }
    @keyframes translating_left {
        0% {
            margin-left: 0;
        } 50% {
            margin-left: 60px;
        } 100% {
            margin-left: 0;
        }  
    } 
    @keyframes translating_top {
        0% {
            margin-top: 0;
        } 50% {
            margin-top: 60px;
        } 100% {
            margin-top: 0;
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
const ButtonsGroup = styled.div`
margin-top: 70px;
display: flex;
gap: 1rem;
button {
    cursor: pointer;
    padding: 15px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 40px;
    &:first-child {
        border: 2px solid #F2277E;
        color: #F2277E;
        background-color: transparent;
    }
    &:last-child {
        background-color: var(--primaryColor);
        color: white;
    }
}
@media (max-width: 1050px) {
    justify-content: center;
}
`
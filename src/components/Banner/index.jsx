import styled from "styled-components";
import bannerImage from "../../assets/images/register/register__bg.png"
import videoIcon from "../../assets/images/icon/video.png"
import FloatintIcons from "../FloatingIcons";

import img1 from "../../assets/images/register/register__1.png"
import img2 from "../../assets/images/register/register__2.png"
import img3 from "../../assets/images/register/register__3.png"

export function Banner() {
    return(
        <StyledBanner>
            <div id="banner_shadow">
                <div className="container">
                    <FloatingIconsTopCollection>
                        <img class="register__1" src={img1} alt="register"/>
                        <img class="register__2" src={img2} alt="register"/>
                        <img class="register__3" src={img3} alt="register"/>
                    </FloatingIconsTopCollection>
                    <span>GaietaInspira</span>
                    <h1>Transformando 
                        <TextDecoration> Ideias</TextDecoration> em 
                        <TextDecoration> Impacto Exponencial </TextDecoration><br className="breaker"/> 
                         online
                    </h1>
                    <div className="registerarea__video">
                        <div>
                            <div class="video__pop__btn">
                                <a class="video-btn" href="https://www.youtube.com/watch?v=vHdclsdkp28">
                                    <img src={videoIcon} alt="" />
                                </a>
                            </div>
                        </div>
                        <p>
                            Acreditamos em você. Queremos transformar sua ideia em ação e ação em resultado! 
                        </p>
                    </div>
                </div>
            </div>
            <FloatintIcons />
        </StyledBanner> 
    )
}

const StyledBanner = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 523px;
    display: flex;
    position: relative;
    background-image: url(${bannerImage});
    span {
        background-color: #E7DEFF;
        padding: 5px 23px;
        font-weight: 600;
        font-size: 14px;
        line-height: 1.5;
        border-radius: 20px;
        color: #5F2DED;
    }
    h1 {
        color: #FFF;
        font-size: 45px;
        width: 640px;
        line-height: 50px;
        font-weight: 600;
        margin-top: 25px;
    }
    #banner_shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--primaryColorOpacity);
        .container {
            width: 85%;
            padding-top: 90px;
            margin: 0 auto;
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
                    font-weight: 600;
                    font-size: 19px;
                    padding-right: 30px;
                    color: #FFF;
                }
            }
        }
    }
    @media (max-width: 700px) {
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
    color: var(--yellow1);
    font-size: 43px;
    @media (max-width: 700px) {
        font-size: 35px;
    }
`
const FloatingIconsTopCollection = styled.div`
    position: absolute;
    top: 0;
    left: 0;
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
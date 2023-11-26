import styled from "styled-components";
import bannerImage from "../../assets/images/register/register__bg.png"
import videoIcon from "../../assets/images/icon/video.png"

export function Banner() {
    return(
        <StyledBanner>
            <div id="banner_shadow">
                <div className="container">
                    <span>GaietaInspira</span>
                    <h1>Transformando 
                        <TextDecoration> Ideias</TextDecoration> em 
                        <TextDecoration> Impacto Exponencial</TextDecoration><br /> 
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
                    color: #FFF;
                }
            }
        }
    }
`
const TextDecoration = styled.small`
    color: var(--yellow1);
    font-size: 43px;
`
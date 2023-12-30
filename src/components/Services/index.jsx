import styled from "styled-components"
import TitleSpan from "../TitleSpan"
import { BsArrowRight } from "react-icons/bs"

import botImage from "../../assets/images/herobanner/herobanner__slider__8.png"
import bcgService from "../../assets/images/service/service__shape__bg__1.png" 
import HeightBefore from "../HeightBefore"

export default function ServicesSection() {
    return(
        <StyledServiceSection>
            
            <div className="light-grey10">
                <div className="container" style={{display: 'block'}}>
                    <br /><br />
                    <TitleSpan>Nossos serviços</TitleSpan>
                </div>
                <div className="container" style={{position: 'relative'}}>
                    <div className="left_side">
                        <div className="left_side_">
                            <h2>Conheça os nossos serviços</h2>
                            <p>
                                Construction is a general term meaning the art and science to form systems organizations, and comes from Latin Construction is
                            </p>
                            <br />
                            <p>
                                <HeightBefore>
                                    Construction is a general term meaning the art and science to form systems organizations, and comes from Latin Construction is a organizations, and comes from Latin construction and Old
                                </HeightBefore>
                            </p>
                        </div>
                        <Explore>
                            Explorar
                            <BsArrowRight />
                        </Explore>
                    </div>
                    <div className="right_side">
                        <img src={bcgService} className="bcg-service" />
                        <div className="column">
                            <div className="single_service">
                                <div className="service_img">
                                    <i>
                                        <svg class="service__icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.30281 28.9536H8.45394C9.05625 28.9536 9.48648 29.5426 9.48648 30.2495V36.8465C9.48648 37.6711 9.05625 38.2602 8.45394 38.2602H6.30281C5.78654 38.2602 5.27026 37.6711 5.27026 36.8465V30.2495C5.27026 29.5426 5.78654 28.9536 6.30281 28.9536Z" fill="#5F2DED"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7027 23.7833H15.8987C16.4257 23.7833 16.8649 24.4239 16.8649 25.3207V36.7228C16.8649 37.6196 16.4257 38.2602 15.8987 38.2602H13.7027C13.0879 38.2602 12.6487 37.6196 12.6487 36.7228V25.3207C12.6487 24.4239 13.0879 23.7833 13.7027 23.7833Z" fill="#5F2DED"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0596 19.6471H23.2108C23.727 19.6471 24.2433 20.412 24.2433 21.1769V36.7303C24.2433 37.6227 23.727 38.2602 23.2108 38.2602H21.0596C20.4573 38.2602 20.0271 37.6227 20.0271 36.7303V21.1769C20.0271 20.412 20.4573 19.6471 21.0596 19.6471Z" fill="#5F2DED"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4381 15.5109H30.5892C31.1055 15.5109 31.6217 16.1499 31.6217 17.0445V36.7265C31.6217 37.6212 31.1055 38.2602 30.5892 38.2602H28.4381C27.8357 38.2602 27.4055 37.6212 27.4055 36.7265V17.0445C27.4055 16.1499 27.8357 15.5109 28.4381 15.5109Z" fill="#5F2DED"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9989 7.6293L23.05 18.137L20.3744 15.4678C15.622 19.6266 9.96272 22.5976 3.63238 24.2568C1.36694 24.9297 0.353173 21.6176 2.74495 21.0505C8.47735 19.533 13.5443 16.8156 17.8363 13.1279L15.5453 10.8879L26.9989 7.6293Z" fill="#FFB31F"></path>
                                        </svg>
                                    </i>
                                    <div className="service__bg__img">
                                        <i>
                                            <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z" fill="#5F2DED" fill-opacity="0.05"></path>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <h2>Atendimento ao Cliente</h2>
                                <p>
                                    Constructions is a general term the art and science to form  
                                </p>
                                <button>
                                    View Subject
                                    <BsArrowRight />
                                </button>
                            </div>
                            <div className="single_service">
                                <div className="service_img">
                                    <i>
                                        <svg class="service__icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M45.8483 26.6935C45.3965 26.2639 44.7953 26.0262 44.1558 26.0262C43.5164 26.0262 42.9166 26.2639 42.4634 26.6935L33.7409 34.9886C33.7306 34.9886 33.7183 34.9867 33.708 34.9867H25.1438C25.1438 34.9541 25.1458 34.9229 25.1458 34.8898C25.1458 34.2537 25.0301 33.6443 24.8165 33.0772H29.4735C29.7924 33.6951 30.4593 34.1214 31.2316 34.1214C32.314 34.1214 33.193 33.2873 33.193 32.258C33.193 31.2287 32.314 30.3946 31.2316 30.3946C30.4593 30.3946 29.7924 30.821 29.4735 31.4389H23.8321C22.7928 30.2507 21.2243 29.4949 19.4716 29.4949C17.9393 29.4949 16.5502 30.0736 15.53 31.0111L15.5281 31.0092L2.44995 43.5669H15.5486L19.0217 40.2842H33.708C34.1956 40.2842 34.6542 40.1645 35.0526 39.9548C35.325 39.8434 35.5749 39.6827 35.79 39.4776L45.8488 29.9124C46.3015 29.4832 46.5499 28.911 46.5499 28.3029C46.5499 27.6949 46.3015 27.1231 45.8483 26.6935ZM19.4716 37.1422C18.1633 37.1422 17.1034 36.1325 17.1034 34.8902C17.1034 33.6461 18.1633 32.6369 19.4716 32.6369C20.7799 32.6369 21.8397 33.6466 21.8397 34.8902C21.8397 36.1325 20.7799 37.1422 19.4716 37.1422ZM33.6664 38.9106C32.9255 38.9106 32.3253 38.3402 32.3253 37.6352C32.3253 36.9321 32.925 36.3599 33.6664 36.3599C34.4077 36.3599 35.0075 36.9321 35.0075 37.6352C35.0075 38.3402 34.4077 38.9106 33.6664 38.9106ZM36.3001 36.6749C36.133 36.2634 35.8606 35.9028 35.5127 35.6209L42.0537 29.4026C42.2727 29.7814 42.602 30.096 43.0019 30.3024L36.3001 36.6749ZM36.231 9.4762H28.4753V8.49301H36.231V9.4762ZM36.231 12.0986H28.4753V11.1155H36.231V12.0986ZM23.3048 9.4762H15.5486V8.49301H23.3044L23.3048 9.4762ZM23.3048 12.0986H15.5486V11.1155H23.3044L23.3048 12.0986ZM41.057 5.87011H39.3308V4.23132H28.589C27.7295 4.23132 26.9215 4.55004 26.3139 5.1283C26.1517 5.28253 26.0106 5.45121 25.8886 5.63014C25.7666 5.45121 25.6255 5.28253 25.4633 5.1283C24.8557 4.55004 24.0477 4.23132 23.1882 4.23132H12.4464V5.87011H10.7231V23.8991H24.0217C24.2677 24.6582 25.011 25.2103 25.8901 25.2103C26.7691 25.2103 27.5125 24.6586 27.7585 23.8991H41.057V5.87011ZM27.0455 5.82305C27.4576 5.43071 28.0059 5.2145 28.589 5.2145H38.2964L38.2797 20.6211H30.4471C29.0344 20.6211 27.6364 20.9873 26.4237 21.6644L26.407 7.29176C26.4065 6.73727 26.6329 6.21586 27.0455 5.82305ZM13.4803 5.21497H23.1877C23.7708 5.21497 24.3191 5.43118 24.7312 5.82352C25.1433 6.21586 25.3702 6.73773 25.3697 7.29223L25.353 21.6653C24.1388 20.9878 22.7413 20.6215 21.3296 20.6215H13.4803V5.21497Z" fill="#5F2DED"></path>
                                        <rect x="15" y="8.54175" width="8" height="0.993317" fill="#FFB31F"></rect>
                                        <rect x="28" y="8.54175" width="8" height="0.993317" fill="#FFB31F"></rect>
                                        <rect x="15" y="11.5198" width="8" height="0.993319" fill="#FFB31F"></rect>
                                        <rect x="28" y="11.5198" width="8" height="0.993319" fill="#FFB31F"></rect>
                                        </svg>
                                    </i>
                                    <div className="service__bg__img">
                                        <i>
                                            <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z" fill="#5F2DED" fill-opacity="0.05"></path>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <h2>Orientação Académica</h2>
                                <p>
                                    Constructions is a general term the art and science to form  
                                </p>
                                <button>
                                    View Subject
                                    <BsArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className="column">
                            <div className="single_service">
                                <div className="service_img">
                                    <i>
                                        <svg class="service__icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.525 44.0499H20.4753C18.7037 44.0499 17.2625 42.7046 17.2625 41.0509C17.2625 36.723 15.7895 32.4935 13.115 29.1417C11.2743 26.835 10.3045 24.0912 10.3103 21.2067C10.3172 17.7711 11.7888 14.4906 14.4541 11.9697C17.1201 9.44796 20.6146 8.03229 24.2939 7.98346C28.1232 7.9323 31.7312 9.28502 34.4566 11.7915C37.1864 14.302 38.6898 17.6547 38.6898 21.2322C38.6898 24.0423 37.7594 26.7272 35.9993 28.9965C33.2113 32.5912 31.7377 36.7597 31.7377 41.0511C31.7377 42.7046 30.2964 44.0499 28.525 44.0499ZM24.5008 10.6603C24.4454 10.6603 24.3904 10.6607 24.3349 10.6614C18.3004 10.7416 13.1927 15.5731 13.1814 21.2117C13.1767 23.5138 13.9501 25.7029 15.418 27.5424C18.4589 31.3533 20.1335 36.1507 20.1335 41.0509C20.1335 41.2278 20.2869 41.3716 20.4752 41.3716H28.5249C28.7133 41.3716 28.8665 41.2278 28.8665 41.051C28.8665 36.1921 30.5286 31.4809 33.6733 27.4265C35.0768 25.6168 35.8187 23.4749 35.8187 21.2321C35.8187 18.3773 34.6191 15.7019 32.4409 13.6987C30.3067 11.7359 27.4925 10.6603 24.5008 10.6603Z" fill="#5F2DED"></path>
                                            <path d="M34.5884 35.3186H14.4117V37.9969H34.5884V35.3186Z" fill="#5F2DED"></path>
                                            <path d="M23.8501 30.4466L21.4301 29.0054L24.8268 24.0417H21.5536C21.0311 24.0417 20.5498 23.7768 20.297 23.3501C20.0444 22.9235 20.0602 22.4024 20.3384 21.9897L25.0805 14.9543L27.5109 16.38L24.1519 21.3634H27.4464C27.9708 21.3634 28.4533 21.63 28.7053 22.059C28.9573 22.4879 28.9385 23.0109 28.6564 23.4232L23.8501 30.4466Z" fill="#FFB31F"></path>
                                            <path d="M25.9355 2.17908H23.0645V6.19654H25.9355V2.17908Z" fill="#5F2DED"></path>
                                            <path d="M10.6816 6.93133L8.65027 8.8241L11.6922 11.6649L13.7235 9.77218L10.6816 6.93133Z" fill="#5F2DED"></path>
                                            <path d="M38.3173 6.93027L35.2754 9.77112L37.3067 11.6639L40.3486 8.82304L38.3173 6.93027Z" fill="#5F2DED"></path>
                                        </svg>
                                    </i>
                                    <div className="service__bg__img">
                                        <i>
                                            <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z" fill="#5F2DED" fill-opacity="0.05"></path>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <h2>Criação de Projetos de Responsabilidade Social</h2>
                                <p>
                                    Constructions is a general term the art and science to form  
                                </p>
                                <button>
                                    View Subject
                                    <BsArrowRight />
                                </button>
                            </div>
                            <div className="single_service">
                                <div className="service_img">
                                    <i>
                                        <svg class="service__icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.30281 28.9536H8.45394C9.05625 28.9536 9.48648 29.5426 9.48648 30.2495V36.8465C9.48648 37.6711 9.05625 38.2602 8.45394 38.2602H6.30281C5.78654 38.2602 5.27026 37.6711 5.27026 36.8465V30.2495C5.27026 29.5426 5.78654 28.9536 6.30281 28.9536Z" fill="#5F2DED"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7027 23.7833H15.8987C16.4257 23.7833 16.8649 24.4239 16.8649 25.3207V36.7228C16.8649 37.6196 16.4257 38.2602 15.8987 38.2602H13.7027C13.0879 38.2602 12.6487 37.6196 12.6487 36.7228V25.3207C12.6487 24.4239 13.0879 23.7833 13.7027 23.7833Z" fill="#5F2DED"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0596 19.6471H23.2108C23.727 19.6471 24.2433 20.412 24.2433 21.1769V36.7303C24.2433 37.6227 23.727 38.2602 23.2108 38.2602H21.0596C20.4573 38.2602 20.0271 37.6227 20.0271 36.7303V21.1769C20.0271 20.412 20.4573 19.6471 21.0596 19.6471Z" fill="#5F2DED"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4381 15.5109H30.5892C31.1055 15.5109 31.6217 16.1499 31.6217 17.0445V36.7265C31.6217 37.6212 31.1055 38.2602 30.5892 38.2602H28.4381C27.8357 38.2602 27.4055 37.6212 27.4055 36.7265V17.0445C27.4055 16.1499 27.8357 15.5109 28.4381 15.5109Z" fill="#5F2DED"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9989 7.6293L23.05 18.137L20.3744 15.4678C15.622 19.6266 9.96272 22.5976 3.63238 24.2568C1.36694 24.9297 0.353173 21.6176 2.74495 21.0505C8.47735 19.533 13.5443 16.8156 17.8363 13.1279L15.5453 10.8879L26.9989 7.6293Z" fill="#FFB31F"></path>
                                        </svg>
                                    </i>
                                    <div className="service__bg__img">
                                        <i>
                                            <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z" fill="#5F2DED" fill-opacity="0.05"></path>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <h2>Criação RH Pleno e Humanizado</h2>
                                <p>
                                    Constructions is a general term the art and science to form  
                                </p>
                                <button>
                                    View Subject
                                    <BsArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledServiceSection>
    )
}

const StyledServiceSection = styled.div`
    margin-top: 50px;
    .container {
        width: 80%;
        margin: 0 auto;
        @media (max-width: 1345px) {
            width: 90%;
        }
        @media (max-width: 1150px) {
            width: 95%;
        }
        @media (max-width: 650px) {
            width: 85%;
        }
    }
    .light-grey10 {
        position: relative;
        width: 100%;
        height: 390px;
        margin-top: 30px;
        background: var(--lightGrey10);
        .container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 1.5rem;
            .left_side {
                padding-top: 30px;
                h2 {
                    color: var(--blackColor2);
                    font-size: 40px;
                    line-height: 45px;
                    font-weight: 600;
                    margin-bottom: 25px;
                    @media (max-width: 1000px) {
                        font-size: 35px;
                    }
                }
                form {
                    display: flex;
                    gap: .3rem;
                    input {
                        flex: 1;
                        border-radius: .3rem;
                        border: 1px solid var(--whitegrey);
                        padding: 10px;
                    }
                    button {
                        border-radius: .3rem;
                        padding: 0 15px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: .5rem;
                        cursor: pointer;
                        background: var(--secondaryColor);
                        color: #fff;
                        border: 2px solid var(--secondaryColor);
                        &:hover {
                            background: var(--bodyBg);
                            color: var(--secondaryColor);
                        }
                    }
                    @media (max-width: 750px) {
                        input {
                            padding: 7px;
                            font-size: .9rem;
                        }
                        button {
                            font-size: .9rem;
                            padding: 0 10px;
                        }
                    }
                }
                img {
                    width: 70%;
                    margin-top: 90px;
                    margin-left: 60px;
                    animation: bounce 1s infinite ease-in-out;
                }
            }
            .right_side {
                position: relative;
                padding-top: 30px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 1.5rem;
                .bcg-service {
                    position: absolute;
                    top: 120px;
                    animation: extra-bounce 15s infinite ease-in-out;
                }
                .single_service {
                    padding: 30px;
                    box-shadow: 0 0 50px 10px rgba(95, 45, 237, 0.1);
                    margin-bottom: 30px;
                    transition: var(--transition);
                    position: relative;
                    border-radius: .5rem;
                    background: var(--whiteColor);
                    height: auto;
                    transition: .3s ease-in-out;
                    &:hover {
                        background: var(--primaryColor);
                        margin-top: -8px;
                        .service_img {
                            i {
                                color: white;
                            }
                            i.service__icon {
                                color: #fff;
                            }
                        }
                        h2 {
                            color: white;
                        }
                        p {
                            color: white;
                        }
                        button {
                            color: white;
                        }
                    }
                    .service_img {
                        position: relative;
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        margin-bottom: 20px;
                        background: var(--whiteColor);
                        svg {
                            position: absolute;
                        }
                        .service__icon {
                            top: 10px;
                        }
                    }
                    h2 {
                        font-size: 22px;
                        font-weight: 500;
                        line-height: 25px;
                        margin-bottom: 20px;
                        color: var(--blackColor2);
                    }
                    p {
                        font-size: 14px;
                        color: var(--contentColor2);
                    }
                    button {
                        background: transparent;
                        margin-top: 15px;
                        font-size: 15px;
                        font-weight: 400;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: .2rem;
                        color: var(--blackColor2);
                        cursor: pointer;
                        &:hover {
                            color: var(--yellow1);
                        }
                    }
                }
            }
            @media (max-width: 980px) {
                display: flex;
                flex-direction: column;
                .left_side {
                    display: block;
                    position: relative;
                    .left_side_ {
                        position: absolute;
                        width: 50%;
                        right: 0;
                        h2 {
                            font-size: 40px;
                        }
                    }
                    img {
                        width: 40%;
                        margin-top: -90px;
                    }
                }
            }
            @media (max-width: 825px) {
                .left_side {
                    img {
                        width: 30%;
                        margin-top: -30px;
                    }
                }
            }
            @media (max-width: 678px) {
                .left_side {
                    .left_side_ {
                        h2 {
                            font-size: 35px;
                        }
                    }
                }
            }       
            @media (max-width: 650px) {
                .left_side {
                    display: block;
                    position: relative;
                    .left_side_ {
                        position: relative;
                        width: 100%;
                        h2 {
                            font-size: 40px;
                        }
                    }
                    img {
                        width: 40%;
                        margin-top: 50px;
                    }
                }
            }
            @media (max-width: 538px) {
                .right_side {
                    display: block;
                }
            }
            @media (max-width: 650px) {
                width: 85%;
                .left_side {
                    .left_side_ {
                        h2 {
                            font-size: 34px;
                            line-height: 40px;
                        }
                    }
                }
                img {
                    display: none;
                }
            }
        }
    }
`
const Explore = styled.button`
    margin-top: 200px;
    padding: 10px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    border-radius: 40px;
    color: white;
    background-color: var(--secondaryColor);
`
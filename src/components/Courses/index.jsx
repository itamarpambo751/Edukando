import styled from "styled-components"
import TitleSpan from "../TitleSpan"

import grid_1 from "../../assets/images/grid/grid_1.png"
import grid_2 from "../../assets/images/grid/grid_2.png"
import grid_small from "../../assets/images/grid/grid_small_5.jpg"

import { BsBookHalf, BsClock, BsHeartFill, BsStarFill } from "react-icons/bs"

function CourseCard() {
    return (
        <div class="grid-item">
            <div class="gridarea__wraper">
                <div class="gridarea__img">
                    <a href="course-details.html">
                        <img src={grid_1} alt="grid" className="gridarea__course__img"/>
                    </a>
                    <div class="gridarea__small__button">
                        <div class="grid__badge orange__color">Data &amp; Tech</div>
                    </div>
                    <div class="gridarea__small__icon">
                        <BsHeartFill />
                    </div>
                </div>
                <div class="gridarea__content">
                    <div class="gridarea__list">
                        <ul>
                            <li>
                                <i class="icofont-book-alt">
                                    <BsBookHalf />
                                </i> 36 Lesson
                            </li>
                            <li>
                                <i class="icofont-clock-time">
                                    <BsClock />
                                </i> 3 hr 40 min
                            </li>
                        </ul>
                    </div>
                    <div class="gridarea__heading">
                        <h3>
                            <a href="course-details.html">
                                Data course to under stand about solution
                            </a>
                        </h3>
                    </div>
                    <div class="gridarea__price">
                        $40.00 <del>/ $67.00</del>
                        <span> <del class="del__2">Free</del></span>
                    </div>
                    <div class="gridarea__bottom">
                        <a href="/instructor-details">
                            <div class="gridarea__small__img">
                                <img src={grid_small} alt="grid" />
                                <div class="gridarea__small__content">
                                    <h6>Micle Robin</h6>
                                </div>
                            </div>
                        </a>
                        <div class="gridarea__star">
                            <i><BsStarFill /></i>
                            <i><BsStarFill /></i>
                            <i><BsStarFill /></i>
                            <i><BsStarFill /></i>
                            <i><BsStarFill /></i>
                            <span>(44)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Courses() {
    return (
        <StyledCoursesSection>
            <div className="container">
                <TitleSpan>Nossos Cursos</TitleSpan>
            </div>
            <div className="init_section">
                <div className="container">
                    <div className="courses_sec_top">
                        <h2>Os Cursos perfeitos para sua carreira</h2>
                        <div className="inter_navigation">
                            <button data-filter="*" className="active">Todos</button>
                            <button data-filter=".tech">Tecnologia</button>
                            <button data-filter=".arch">Arquitetura</button>
                            <button data-filter=".design">Design</button>
                            <button data-filter=".merch">Comércio</button>
                        </div>
                    </div>
                    <div class="row grid">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>
            </div>
        </StyledCoursesSection>
    )
}

const StyledCoursesSection = styled.div`
    background: var(--whiteColor); 
    margin-top: 220px;
    padding-top: 120px;
    padding-bottom: 100px;
    @media (max-width: 909px) and (min-width: 539px) {
        margin-top: 520px;
    }
    @media (max-width: 538px) and (min-width: 501px) {
        margin-top: 1010px;
    }
    @media (max-width: 500px) and (min-width: 390px){
        margin-top: 1050px;
    }
    @media (max-width: 391px) and (min-width: 375px) {
        margin-top: 1100px;
    } 
    @media (max-width: 376px) and (min-width: 360px) {
        margin-top: 1150px;
    }
    .container {
        width: 85%;
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
    .init_section {
        margin-top: 50px;
    }
    .courses_sec_top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        @media (max-width: 991px) {
            display: block;
        }
    }
    h2 {
        font-size: 45px;
        font-weight: 600;
        line-height: 45px;
        width: 50%;
        color: var(--blackColor);
        @media (max-width: 1290px) {
            font-size: 40px;
        }
        @media (max-width: 991px) {
            font-size: 30px;
            width: 100%;
            margin-bottom: 20px;
        }
    }
    .inter_navigation {
        display: flex;
        gap: 2rem;
        padding-top: 10px;
        button {
            color: var(--blackColor);
            cursor: pointer;
            background-color: transparent;
        }
        button.active {
            color: blue;
        }
        @media (max-width: 600px) {
            gap: .5rem;
            button {
                font-size: 14px;
                padding: .2rem .3rem;
            }
        }
    }
    .row.grid {
        width: 100%;
        margin: 0 auto;
        display: grid;
        gap: 5px;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 70px;
        gap: 2%;
        @media (max-width: 991px) {
            width: 100%;
            grid-template-columns: repeat(2, 1fr);
            grid-row-gap: 1%;
            .grid-item {
                margin-bottom: 0;
            }
        }
        @media (max-width: 909px) {
            grid-gap: 2cqmin;
        }
        @media (max-width: 815px) {
            width: 100%;
            transform: scale(.98) translateX(-6px) translateY(30px);
            grid-gap: 2cqmin;
            margin: 0 auto;
        }
        @media (max-width: 645px) {
            width: 100%;
            padding-top: 40px;
            transform: scale(1);
            display: block;
            margin: 0 auto;
            .grid-item {
                margin-bottom: 30px;
            }
        }
    }
    .grid-item {
        width: 100%;
        height: 100%;
        position: relative;
        .gridarea__wraper {
            background: var(--whiteColor);
            padding: 15px;
            box-shadow: 0 0 20px 10px rgba(95, 45, 237, 0.05);
            position: relative;
        }
    }
    .gridarea__img .gridarea__course__img {
        width: 100%;
    }
    .gridarea__small__icon {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 30px;
            height: 27px;
            line-height: 27px;
            background: rgba(0, 0, 0, 0.16);
            text-align: center;
            color: var(--whiteColor);
            border-radius: 3px;
            transition: var(--transition);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
    }
    .gridarea__wraper .gridarea__content .gridarea__list {
            margin-bottom: 15px;
    }
    .gridarea__wraper .gridarea__content .gridarea__list ul {
            display: flex;
    }
    .gridarea__wraper .gridarea__content .gridarea__list ul li {
            font-size: 14px;
            width: 50%;
            color: var(--blackColor);
    }
    .gridarea__wraper .gridarea__content .gridarea__list ul li i {
            font-size: 18px;
            color: var(--primaryColor);
            margin-right: 5px;
    }
    .gridarea__wraper .gridarea__content .gridarea__price {
            font-size: 18px;
            font-weight: 600;
            color: var(--primaryColor);
            margin-bottom: 20px;
            margin-top: 10px;
    }
    .gridarea__wraper .gridarea__content .gridarea__price del {
            color: var(--lightGrey4);
            font-size: 13px;
    }
    .gridarea__wraper .gridarea__content .gridarea__price span {
            margin-left: 25px;
    }
    .gridarea__wraper .gridarea__content .gridarea__price span del {
            color: var(--secondaryColor3);
            font-size: 16px;
    }
    .gridarea__wraper .gridarea__content .gridarea__bottom {
            border-top: 1px solid var(--lightGrey5);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 15px;
    }
    .gridarea__wraper .gridarea__content .gridarea__bottom .gridarea__star {
            color: var(--yellow1);
            font-size: 15px;
    }
    .gridarea__wraper .gridarea__content .gridarea__bottom .gridarea__star i svg {
            transform: scale(.9);
    }
    .gridarea__wraper .gridarea__content .gridarea__bottom .gridarea__star span {
            color: var(--lightGrey6);
            font-size: 13px;
    }
    a {
            color: var(--contentColor);
    }
    .gridarea__bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
    }
    .gridarea__small__img {
            display: flex;
            align-items: center;
            gap: .4rem;
    }
    .gridarea__small__img img {
            width: 28px;
            height: 28px;
            border-radius: 50%;
    }
    .gridarea__small__button {
            position: absolute;
            top: 20px;
            left: 20px;
            z-index: 999;
            background: var(--secondaryColor);
            color: var(--whiteColor);
            border-radius: 3px;
            font-weight: 600;
            font-size: 12px;
            display: inline-block;
            text-align: center;
            padding: 3px 15px;
            line-height: 1;
    }
`
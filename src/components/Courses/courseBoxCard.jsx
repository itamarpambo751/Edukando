import grid_1 from "../../assets/images/grid/grid_1.png"
import grid_small from "../../assets/images/grid/grid_small_5.jpg"

import { BsBookHalf, BsClock, BsHeartFill, BsList, BsStarFill, BsXCircle } from "react-icons/bs"

export default function CourseBoxCard() {
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
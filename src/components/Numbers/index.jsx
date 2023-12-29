import styled from "styled-components"
import counter_1 from "../../assets/images/counter/counter__1.png"
import counter_2 from "../../assets/images/counter/counter__2.png"
import counter_3 from "../../assets/images/counter/counter__3.png"
import counter_4 from "../../assets/images/counter/counter__4.png"

export default function OurNumbers() {
    return(
        <StyledSectionCounter>
            <ul>
                <li>
                    <img src={counter_1} alt="" />
                    <div>
                        <h2>27+</h2>
                        <span>Certificações</span>
                    </div>
                </li>
                <li>
                    <img src={counter_2} alt="" />
                    <div>
                        <h2>145+</h2>
                        <span>TOTAL DE ESTUDANTES</span>
                    </div>
                </li>
                <li>
                    <img src={counter_3} alt="" />
                    <div>
                        <h2>10k</h2>
                        <span>TOTAL DE INSTRUTORES</span>
                    </div>
                </li>
                <li>
                    <img src={counter_4} alt="" />
                    <div>
                        <h2>2+</h2>
                        <span>EM TODO O MUNDO</span>
                    </div>
                </li>
            </ul>
        </StyledSectionCounter>
    )
}

const StyledSectionCounter = styled.div`
    margin-top: 90px;
    width: 100%;
    ul {
        width: 85%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex: 1;
            div { 
                h2 {
                    font-weight: 700;
                    font-size: 45px;
                    line-height: 1.1;
                    color: var(--blackColor);
                }
                span {
                    font-weight: 500;
                    color: var(--blackColor);
                }   
            }
        }
        @media (max-width: 995px) {
            width: 75%;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-row-gap: 2rem;
        }
        @media (max-width: 738px) {
            width: 90%;
        }
        @media (max-width: 630px) {
            display: block;
            li {
                margin-bottom: 2rem;
            }
        }
    }
`
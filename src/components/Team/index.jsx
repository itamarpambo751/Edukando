import styled from "styled-components"
import { BsChatLeftFill, BsEye, BsEyeFill, BsX } from "react-icons/bs"
import { useState } from "react"
import image from "../../assets/images/blog/blog_6.png"
import image2 from "../../assets/images/blog/blog_7.png"
import image3 from "../../assets/images/blog/blog_8.png"
import image4 from "../../assets/images/blog/blog_9.png"
import image5 from "../../assets/images/blog/blog_25.png"
import image6 from "../../assets/images/blog/blog_20.png"
import image7 from "../../assets/images/blog/blog_28.jpg"
import image8 from "../../assets/images/blog/blog_30.jpg"

const team = [
    {
        image: image,
    },
    {
        image: image2,
    },
    {
        image: image3,
    },
    {
        image: image4,
    },
    {
        image: image5,
    },
    {
        image: image6,
    },
    {
        image: image7,
    },
    {
        image: image8,
    },
]

export default function Team() {
    const [viewing, setViewing] = useState()
    function viewThis(member) {
        setViewing(member.image)
    }
    return(
        <StyledTeamContainer>
            <div id="team_gallery">
                {team.map(member => (
                    <figure>
                        <img src={member.image} alt="team_member" />
                        <figcaption>
                            <i onClick={() => viewThis(member)}>
                                <BsEyeFill/>
                            </i>
                        </figcaption>
                    </figure>
                ))}
            </div>
            {viewing && (
                <ViewTeamMember>
                    <div className="img_container">
                        <button id="img_container_close" onClick={() => setViewing(null)}>
                            <i>
                                <BsX/>
                            </i>
                        </button>
                        <img src={viewing} alt="team_member" />
                    </div>
                </ViewTeamMember>
            )}
        </StyledTeamContainer>
    )
}

const StyledTeamContainer = styled.div`
    width: 100%;
    margin-top: 100px;
    #team_gallery {
        width: 90%;
        padding: 2rem;
        margin: 0 auto;
        display: grid;
        gap: 5px;
        grid-template-columns: repeat(4, 1fr);
        border: 1px solid var(--borderColor2);
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.02);
        figure {
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            figcaption {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 999;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(0, 0, 0, .5);
                opacity: 0;
                transition: all.3s ease;
                &:hover {
                    opacity: 1;
                }
                i {
                    color: white;
                    cursor: pointer;
                }
            }
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 720px) {
        margin-top: 50px;
    }
`
const ViewTeamMember = styled.div`
    text-align: center;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 0 8px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .8);
    z-index: 10000;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    .img_container {
        position: relative;
        width: 500px;
        height: 400px;
        object-fit: cover;
        #img_container_close {
            position: absolute;
            top: -40px;
            right: 0;
            width: 40px;
            height: 40px;
            color: white;
            background: rgba(30, 30, 50, .4);
            cursor: pointer;
            i svg {
                margin-top: 3px;
                font-size: 20px;
            }
        }
        img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            left: 0;
            top: 0;
        }
    }
`
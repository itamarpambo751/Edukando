import styled from "styled-components"
import team_member_1 from "../../assets/images/blog/blog_6.png"
import team_member_2 from "../../assets/images/blog/blog_7.png"
import team_member_3 from "../../assets/images/blog/blog_8.png"
import team_member_4 from "../../assets/images/blog/blog_9.png"
import team_member_5 from "../../assets/images/blog/blog_25.png"
import team_member_6 from "../../assets/images/blog/blog_20.png"
import team_member_7 from "../../assets/images/blog/blog_28.jpg"
import team_member_8 from "../../assets/images/blog/blog_30.jpg"

export default function Team() {
    return(
        <StyledTeamContainer>
            <div id="team_gallery">
                <figure>
                    <img src={team_member_4} alt="team_member" />
                    <figcaption>

                    </figcaption>
                </figure>
                <figure>
                    <img src={team_member_3} alt="team_member" />
                    <figcaption>

                    </figcaption>
                </figure>
                <figure>
                    <img src={team_member_2} alt="team_member" />
                    <figcaption>

                    </figcaption>
                </figure>
                <figure>
                    <img src={team_member_1} alt="team_member" />
                    <figcaption>

                    </figcaption>
                </figure>
                <figure>
                    <img src={team_member_5} alt="team_member" />
                    <figcaption>

                    </figcaption>
                </figure>
                <figure>
                    <img src={team_member_6} alt="team_member" />
                    <figcaption>

                    </figcaption>
                </figure>
                <figure>
                    <img src={team_member_7} alt="team_member" />
                    <figcaption>

                    </figcaption>
                </figure>
                <figure>
                    <img src={team_member_8} alt="team_member" />
                    <figcaption>

                    </figcaption>
                </figure>
            </div>
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
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: .7rem;
        border: 1px solid var(--borderColor2);
        figure {
            position: relative;
            height: 250px;
            flex: 1;
            img {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            figcaption {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 999;
            }
        }
    }
`
import styled from "styled-components";
import bannerImage from "../../assets/images/register/register__bg.png"
export const StyledBanner = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 523px;
    display: flex;
    position: relative;
    background-image: url(${bannerImage});
    #banner_shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--primaryColorOpacity);
    }
`
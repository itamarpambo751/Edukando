import styled from "styled-components"

export const StyledHeader = styled.header`
    width: 100%;
    height: 110px;
    background: #FFF;
    display: flex;
    align-items: center;

    div.container {
        padding-top: .5rem;
        width: 85%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .header-right-side {
            display: flex;
            align-items: center;
            gap: 10rem;
            nav ul {
                display: flex;
                gap: 3rem;
                li a {
                    color: var(--blackColor);
                }
            }
            .account-section {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: .7rem;
            }
        }
    }
`
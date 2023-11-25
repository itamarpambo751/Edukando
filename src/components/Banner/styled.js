import styled from "styled-components";

export const StyledBanner = styled.div`
    margin: 0 auto;
    width: 80%;
    display: flex;
    .left_side {
        margin-top: 105px;
        span {
            font-weight: 600;
            font-size: .9rem;
            padding: .2rem 1.2rem;
            border-radius: 1rem;
            color: var(--primaryColor);
            background-color: var(--primaryColorOpacity);
        }
        h1 {
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-size: 60px;
            font-family: var(--headingFont);
            line-height: 72px;
            font-weight: 700;
            color: var(--blackColor);
        }
        p {
            font-size: 17px;
            width: 80%;
            color: var(--contentColor);
        }
        form {
            margin-top: 2rem;
            display: flex;
            height: 60px;
            width: 450px;
            gap: 1rem;
            input {
                height: 100%;
                flex: 1;
                border-radius: .3rem;
                padding: 20px;
                border: 1px solid var(--whitegrey);
            }
            button {
                height: 100%;
                width: 150px;
            }
        }
    }
`
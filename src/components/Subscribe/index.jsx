import styled from "styled-components";
import { Banner } from "../Banner";
import { BsArrowRight } from "react-icons/bs";

export default function Subscribe () {
    return(
        <StyledSubscribeSection>
            <Banner />
            <Formulary>
                <h2>Envie sua candidtura</h2>
                <FormGroups>
                    <FormGroup>
                        <Input placeholder="Nome completo"/>
                    </FormGroup>
                    <FormDoubleGroup>
                        <Input placeholder="Endereço de Email"/>
                        <Input placeholder="+244 000 000 000"/>
                    </FormDoubleGroup>
                    <FormGroup>
                        <Input placeholder="Endereço"/>
                    </FormGroup>
                    <FormGroup>
                        <TextArea placeholder="Candidate-se enviando um comentário" rows={6}/>
                    </FormGroup>
                    <Button>
                        Candidatar 
                        <BsArrowRight />
                    </Button>
                </FormGroups>
            </Formulary>
        </StyledSubscribeSection>
    )
}

const StyledSubscribeSection = styled.div`
    width: 100%;
    position: relative;
`
const Formulary = styled.form`
    position: absolute;
    width: 500px;
    top: 90px;
    right: 150px;
    padding: 40px;
    background-color: var(--bodyBg);
    h2 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--blackColor);
    }
`
const FormGroups = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
const FormGroup = styled.div`

`
const FormDoubleGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.5rem;
`
const Input = styled.input`
    padding: 12px 10px;
    width: 100%;
    font-size: 1.1rem;
    color: var(--bodyColor);
    background-color: var(--lightGrey8);
`
const TextArea = styled.textarea`
    width: 100%;
    padding: 15px;
    background-color: var(--lightGrey8);
`
const Button = styled.button`
    padding: 13px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    color: var(--whiteColor);
    background-color: var(--primaryColor);
    width: 150px;
    border-radius: .3rem;
    position: relative;
    cursor: pointer;
`
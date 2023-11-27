import styled from 'styled-components'
import { Banner, Header, ToggleThemeButton } from './components'
import { BsCheck } from 'react-icons/bs'

import about_2 from "./assets/images/about/about_2.png"
import about_3 from "./assets/images/about/about_3.png"
import about_11 from "./assets/images/about/about_11.png"

function App() {
  return (
    <>
      <Header />
      <Banner />
      <ToggleThemeButton />
      <StyledAboutSection>
        <div id='about_imgs'>
          <div id='about_img_group'>
            <img src={about_11} id='back_img'/>
            <img src={about_2} id='main_img'/>
            <img src={about_3} id='right_img'/>
          </div>
        </div>
        <div className='about_right_side'>
          <h1>O seu Mundo da motivação e conquista.</h1>
          <span className='about_sub_title'>Em Angola, vocacionanda à inspiração e impacto social...</span>
          <ul>
            <li>
              <i>
                <BsCheck />
              </i>
              <span>Formação e Treinamento</span>
            </li>
            <li>
              <i>
                <BsCheck />
              </i>
              <span>Desenvolvimento pessoal e profissional</span>
            </li>
            <li>
              <i>
                <BsCheck />
              </i>
              <span>Organização de eventos culturais e corporativos</span>
            </li>
            <li>
              <i>
                <BsCheck />
              </i>
              <span>Serviços de consultoria individual e empresarial</span>
            </li>
          </ul>
        </div>
      </StyledAboutSection>

      <div style={{height:'1000px'}}></div>
    </>
  )
}

const StyledAboutSection = styled.div`
  width: 85%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 50% 50%;
  gap: 1.6rem;
  transform: translateY(30px);
  .about_right_side {
    h1 {
      font-size: 45px;
      line-height: 50px;
      font-weight: 600;
      margin-bottom: 30px;
      color: var(--blackColor2);
    }
    .about_sub_title {
      color: #5F6C76;
      position: relative;
      margin-left: 18px;
      &::before {
        content: '';
        position: absolute;
        left: -16px;
        top: -5px;
        width: 1.5px;
        background: var(--primaryColor);
        height: 30px;
      }
    } 
    ul {
      margin-top: 25px
    }
    ul li {
      margin-bottom: 22px;
      color: var(--blackColor);
      font-weight: 500;
      display: flex;
      align-items: center;
    }
    ul li span {
      color: var(--blackColor2);
    }
    ul li i {
      width: 31px;
      height: 33px;
      line-height: 31px;
      text-align: center;
      background: rgba(95, 45, 237, 0.04);
      color: var(--primaryColor);
      transition: var(--transition);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
    }
  }
  #about_imgs {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    #about_img_group {
      margin-right: auto;
    #back_img {
        position: absolute;
        top: 150px;
        z-index: -1;
      }
      #main_img {
        transform: translateX(20%);
      }
      #right_img {
        position: absolute;
        right: 30px;
        bottom: 0;
      }
    }
  }
`

export default App

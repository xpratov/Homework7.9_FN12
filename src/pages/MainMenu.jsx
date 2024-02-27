import React from 'react'
import styled from 'styled-components'
// Birorta sahifaga yo'naltirish uchun react-router-dom ichidan chiquvchi Link'dan foydalanamiz
import { Link } from 'react-router-dom'
// Components folder'ining ichidagi oldindan yasab qo'ygan StyledButton'ni import qilamiz
import StyledButton from '../components/StyledButton'

// styled yordamida sahifani stillaymiz 
const StyledMainMenu=styled.div`
  width: 325px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 135px;
`
const StyledBox=styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 48px;
  background: linear-gradient(180deg, #344ABA 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: 0px 6px 0px 8px #2463FF inset, 0px -8px 0px 4px #140E66 inset;
  padding-top: 140px;
  padding-bottom: 65px;
  margin-top: 55px;
`

// Sahifa yaratib olamiz
const MainMenu = () => {
  return (
    // Yuqorida styled yordamida yaratgan componentlarimizni, sahifaga joylashtiramiz
    <StyledMainMenu>
      <img style={{position: 'absolute'}} src="../src/assets/game-logo.png" alt="The Hangman Game" />
      <StyledBox>
        {/* Start tugmasi bosilganda, categories sahifaga o'tish uchun tugmani react-router-dom ichidan chiqqan Link yordamida o'raymiz. Uning to property'si bor. Unga kerakli sahifaning path'ini beramiz. */}
        <Link to={"/categories"}>
          {/* Start tugmasini yaratamiz va stillaymiz */}
          <img  style={{cursor: 'pointer', marginBottom: "60px"}} src="../src/assets/start-button.svg" alt="Start game" />
        </Link>
        {/* Bunda ham tugma bosilganda kerakli sahifaga o'tishini ta'minlaymiz */}
        <Link to={"/how-to-play"} style={{textDecorationLine: 'none'}}>
          {/* Oldindan yaratilgan ushbu dinamik tugmaga variant nomli property'si mavjud. Agar ushbu property "dumaloq"qa teng bo'lsa, tugma oddiy tugmadan ko'ra chekkalari yumaloqroq bo'lishini ta'milaymiz */}
          <StyledButton variant="dumaloq" >How to Play</StyledButton>
        </Link>
      </StyledBox>
    </StyledMainMenu>
  )
}
// Ushbu sahifani export qilamiz. Uni App componenti kutib oladi. Va kerakli payt uni sahifada chizadi
export default MainMenu

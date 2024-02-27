import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import StyledHeadingComp from '../components/StyledHeading'

// // Ushbu sahifa uchun kerakli componentlarni yaratib olamiz
const StyledHowtoplay=styled.div`
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: -70px;
`
const StyledHero=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const StyledStepBoxes=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: -10px;
`
const StyledStepBox=styled.div`
    width: calc(325-32)px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-radius: 20px;
    gap: 8px;
    background: #FFF;
`
const StyledDiv=styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    gap: 16px;
`
const StyledNum=styled.span`
    width: 18px;
    height: 29px;
    color: #2463FF;
    font-family: "Mouse Memoirs", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
    letter-spacing: 1.2px;
`
const StyledH6=styled.h6`
    margin: 0px;
    height: 20px;
    color: #261676;
    font-family: "Mouse Memoirs", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
    letter-spacing: 1.2px;
    text-transform: uppercase;
`
const StyledP=styled.p`
    color: #887DC0;
    font-family: "Mouse Memoirs", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
    letter-spacing: 0.8px;
    align-self: stretch;
`

// Sahifani yaratamiz
const HowToPlay = () => {
  return (
    // Yasagan hamma componentlarimizni sahifaga joylashtiramiz
    <StyledHowtoplay>
        <StyledHero>
            {/* Ushbu sahifadan yana asosiy sahifaga qaytish uchun Back tugmasini qo'shamiz. Buni ham Link bilan o'raymiz va to property'sini beramiz. */}
            <Link to={"/"}>
                <img src="../src/assets/to-back-icon.svg" alt="Back" />
            </Link>
            {/* Ushbu yasagan componentimizga text nomli property qo'shamiz. Text orqali berib yuborilgan string turidagi ma'lumot sahifada chiziladi. */}
            <StyledHeadingComp text={"How to Play"}/>
        </StyledHero>
        <StyledStepBoxes>
            {/* Sahifaning shartlar yozilgan qismini ham yaratib olamiz */}
            <StyledStepBox>
                <StyledDiv>
                    <StyledNum>01</StyledNum>
                    <StyledH6>Choose a category</StyledH6>
                </StyledDiv>
                <StyledP>First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.</StyledP>
            </StyledStepBox>
            <StyledStepBox>
                <StyledDiv>
                    <StyledNum>02</StyledNum>
                    <StyledH6>Guess letters</StyledH6>
                </StyledDiv>
                <StyledP>Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.</StyledP>
            </StyledStepBox>
            <StyledStepBox>
                <StyledDiv>
                    <StyledNum>03</StyledNum>
                    <StyledH6>Win or lose</StyledH6>
                </StyledDiv>
                <StyledP>You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.</StyledP>
            </StyledStepBox>
        </StyledStepBoxes>
    </StyledHowtoplay>
  )
}
// Ushbu sahifani export qilamiz. Uni App komponenti kutib oladi va kerakli vaqtda sahifaga chizadi
export default HowToPlay

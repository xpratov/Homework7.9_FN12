import React from 'react'
import { styled } from 'styled-components'

const StyledIngameHero=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 90px;
`
const StyledMenu=styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 16px;
`
const StyledTitle=styled.h2`
    color: #FFF;
    text-align: center;
    font-family: "Mouse Memoirs", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
    letter-spacing: -0.2px;
`
const StyledHealthBar=styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`
const StyledProgress=styled.div`
    width: 60px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 4px;
    background-color: #fff;
    border-radius: 100px;
    &::after{
        content: "";
        width: 50%;
        height: 8px;
        border-radius: 100px;
        background: #261676;
    }
`

const IngameHero = ({title}) => {
  return (
    <StyledIngameHero>
        <StyledMenu>
            <img src="../src/assets/menu-button.png" alt="Menu" />
            <StyledTitle>{title}</StyledTitle>
        </StyledMenu>
        <StyledHealthBar>
            <StyledProgress></StyledProgress>
            <img src="../src/assets/heart-icon.png" alt="Health" />
        </StyledHealthBar>
    </StyledIngameHero>
  )
}

export default IngameHero

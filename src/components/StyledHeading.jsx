import React from 'react'
import { styled } from 'styled-components'

// Styled componentni yaratib olamiz
const StyledHeading=styled.h3`
    text-align: center;
    font-family: "Mouse Memoirs", sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%;
    letter-spacing: 2.4px;
    background: linear-gradient(180deg, #67B6FF 16.42%, #FFF 100%);
    background-clip: text;
    -webkit-text-stroke-color: #243041;
    -webkit-text-stroke-width: 1px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
// Ushbu componentni yaratib olamiz, u text nomli parameter qabul qiladi va uni styled compenent'ning textContent'iga joylaydi
const StyledHeadingComp = ({text}) => {
  return (
    <StyledHeading>
        {text}
    </StyledHeading>
  )
}
// ushbu component'ni export qilamiz
export default StyledHeadingComp

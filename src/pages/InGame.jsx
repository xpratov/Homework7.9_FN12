import React from 'react'
import styled from "styled-components"
import IngameHero from '../components/IngameHero'

const StyledInGame=styled.div`
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -40px;
`

const InGame = () => {
  return (
    <StyledInGame>
        <IngameHero title={"Countries"}/>
    </StyledInGame>
  )
}

export default InGame

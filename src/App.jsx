import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' // Saytni pagination qilish uchun ushbu kutubxonadan foydalanamiz
import { styled } from 'styled-components' // Componentlarni shu yerni o'zida stillash uchun syled'dan foydalanamiz
import MainMenu from './pages/MainMenu' // Asosiy page'ni import qilamiz
import HowToPlay from './pages/HowToPlay' // O'yinning qoidalari tushuntirilgan sahifani import qilamiz
import CategoryPick from './pages/CategoryPick' // Kategoriyalarni tanlash uchun sahifani ham import qilamiz
import InGame from './pages/InGame'
import NotFound from './pages/NotFound'


// Barcha sahifalarni o'rab turgan App componentini styled-components yordamida stillaymiz
const StyledApp=styled.div`
  width: 375px;
  height: 730px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../src/assets/bg-mainmenu-mobile.png");
  background-repeat: no-repeat;
  background-color: yellow;
  background-size: cover;
  padding-top: 30px;
`
// App componentini yaratamiz
const App = () => {
  // const [data, setData]=useState([])

  
  // useEffect(()=>{
  //   getData()
  // }, []);

  return (
  // Pagination qilish uchun react-router-dom ichidan chiqqan BrowserRouter'ni barcha component'lar atrofiga o'raymiz
  <BrowserRouter>
    {/* styled-components yordamida yaratilgan StyledApp'ni joylaymiz */}
    <StyledApp>
      {/* react-router-dom ichidan chiqqan Routes - barcha Route'larni o'rab turishi kerak */}
      <Routes>
        {/* Agar path slash'ga teng bo'lsa, Asosiy menu chiqishini tayinlaymiz */}
        <Route exact path='/' Component={MainMenu}/>
        {/* Agar path how-to-play'ga teng bo'lsa, HowToPlay componenti ya'ni sahifasi chiqishini ta'yinlaymiz*/}
        <Route path='how-to-play' Component={HowToPlay}/>
        {/* path categories'ga teng bo'lsa, Kategoriya tanlash sahifasi chiqadi */}
        <Route path='categories' Component={CategoryPick}/>
        <Route path='game' Component={InGame}/>
        <Route Component={NotFound}/>      
      </Routes>
    </StyledApp>
  </BrowserRouter>
  )
}
// Ushbu yaratgan App'ni export qilamiz. Uni main.jsx fayli kutib oladi va sahifaga chizadi.
export default App

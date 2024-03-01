import React, { useState, useEffect } from 'react'
// Kerakli kutubxona va componentlarni import qilib olamiz
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import StyledHeadingComp from '../components/StyledHeading'
import StyledButton from '../components/StyledButton'


// Ushbu sahifada chiziladigan componentlarga stil beramiz
const StyledCategoryPick=styled.div`
    width: 325px;
    margin-top: -70px;
`
const StyledHero=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const StyledCategories=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 16px;
`
const CategoryPick = () => {
    const [data, setData]=useState([])
    async function fetchData() {
    try {
      const response = await fetch('./data.json'); 
      const data = await response.json();
      setData(data)
      console.log(data.categories);
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
    }
  }
  useEffect(() => {
    fetchData()
  },[]);
  
  return (
    <StyledCategoryPick>
        <StyledHero>
            {/* Back tugmasi orqali asosiy sahifaga qaytishni ta'milaymiz */}
            <Link to={"/"}>
                <img src="../src/assets/to-back-icon.svg" alt="Back" />
            </Link>
            {/* Quyidagi componentning text property'si orqali uning textContent'ini beramiz */}
            <StyledHeadingComp text={"Pick a Category"}/>
        </StyledHero>
        <StyledCategories>
            {/* Buttonlarni sahifaga joylashtiramiz */}
            {data?Object.entries(data.categories).map(el=>(
                <StyledButton>{el}</StyledButton>
            )): "..."}
        </StyledCategories>
    </StyledCategoryPick>
  )
}
// Ushbu sahifani export qilamiz. Uni App componenti kutib oladi va kerakli payt sahifaga chizadi.
export default CategoryPick

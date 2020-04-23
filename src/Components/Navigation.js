import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from '../Images/logo.svg'
import Hamburger from '../Images/icon-hamburger.svg'
export class Navigation extends Component {

    componentDidMount(){

       const ham = document.getElementById("hamburger");
        const list = document.getElementById("ul");
        ham.addEventListener("click",()=>{
            list.classList.toggle("active");
            document.body.classList.toggle("bodyScroll");
        })
    }
    render() {
        return (
            <>
                <OuterContainer>
                    <ImageContainer>
                   <a href="Home.js"><Image src={Logo} alt="logo"/></a>
                    <Image id="hamburger" src={Hamburger} alt="hamburger-icon"/>
                    </ImageContainer>
                    <OptionsList id="ul" className="inactive">
                        <Options>HOW WE WORK</Options>
                        <Options>BLOG</Options>
                        <Options>ACCOUNT</Options>
                        <Options>VIEW PLANS</Options>
                    </OptionsList>
                </OuterContainer>
            </>
        )
    }
}

export default Navigation

const OuterContainer = styled.div`
    display:grid;
    grid-template-columns:100%;
    place-items:space-around;
    position:relative;
    background-color:white;
    padding:2vh 0;
    position:fixed;
    width:100vw;
    z-index:100;
    @media (min-width:960px){
        grid-template-columns:50% 50%;
        padding:0;
    }
`;
const ImageContainer = styled.div`
    display:grid;
    grid-template-columns:80% 10%;
    align-items:center;
    justify-content:space-around;
    @media (min-width: 960px){
        width:95%;
        margin: 0 auto;
        #hamburger{
            display:none;
        }
    }
    `; 
const OptionsList = styled.ul`
   
    list-style-type:none;
    @media (max-width:959px){
        &.inactive{display:none;}
        &.active
        {
            position:absolute;
            width:100%;
            height:92vh;
            display: grid;
            grid-template-columns:100%;
            place-items:center;
            margin:0;
            padding:0;
            top:8vh;
            bottom:0;
           z-index:99;
           background-color:black;
           color:white;
        }
    }
    @media (min-width:960px){
        display:grid;
        grid-template-columns: 30% 10% 25% 30%;
        place-items:Center;
       width:95%;
    }

    @media (max-width: 640px) and (orientation: landscape) {
        &.active
        {
            opacity:0.8;
            position:absolute;
            width:100%;
            height:92vh;
            display: grid;
            grid-template-columns:100%;
            place-items:center;
            margin:0;
            padding: 0;
            top:12vh;
            bottom:0;
           z-index:99;
           background-color:black;
           color:white;
        }
    }
    `;


const Options = styled.li`
    text-align:center;
    &:nth-of-type(4){
        border:1px solid white;
        padding:15px 25px;
    }
    @media (min-width:960px){
        cursor:pointer;
        color:hsl(273, 4%, 51%);
        &:nth-of-type(4){
            border:2px solid black;
            padding:15px 25px;
        } 
        &:nth-of-type(4):hover{
            background-color:hsl(256, 26%, 20%);
            color:
        } 
    }
   `;
const Image = styled.img`cursor:pointer; `;
   

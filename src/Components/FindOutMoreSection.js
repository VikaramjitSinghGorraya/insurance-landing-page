import React, { Component } from 'react'
import styled from 'styled-components'
import Pattern from '../Images/bg-pattern-how-we-work-desktop.svg'
export class FindOutMoreSection extends Component {
    render() {
        return (
            <>
                <OuterContainer>
                    <HeadingContainer>
                        <Image src={Pattern}/>
                    <h2>
                         Find out more about how we work
                    </h2> 
                    </HeadingContainer>  
                    <ButtonContainer><Button>HOW WE WORK</Button></ButtonContainer>  
                </OuterContainer>
            </>
        )
    }
}

export default FindOutMoreSection
const OuterContainer = styled.div`
    min-height:45vh;
    position:relative;
    display:grid;
    grid-template-columns:100%;
    justify-content:center;
    place-items:center;
    text-align:center;
    background-color:hsl(256, 26%, 20%);
    padding: 0 2vw;
    color:white;
    h2{
        font-size: 3em;
        padding:0;
        margin:0;
    }
    
    @media (min-width:960px){
        display:grid;
        grid-template-columns:50% 50%;
        width:90%;
        margin:0 auto;
        align-items:center;
        h2{
            text-align:left;
            font-size: 3em;
        }
    }
    @media (max-width:740px )and (orientation:landscape){
        height:100vh;
    }
    `;
const HeadingContainer = styled.div`
@media (min-width:960px){
    padding:0 5vw;
    justify-content:start;
}
`;
const ButtonContainer = styled.div``;
const Image = styled.img`
display:none;
    @media (min-width:960px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        height:100%;
        width:50%;
    }
`;
const Button = styled.button`
background-color: transparent;
border: 2px solid white;
padding: 10px 15px;
text-align:center;
color: #fff;
letter-spacing: 2px;
z-index: 1;
cursor: pointer;
margin-top:-10vh;
@media (min-width:960px){
    padding: 15px 30px;
    position:relative;
    z-index:101;
    &:hover{
        background-color:white;
        color:hsl(273, 4%, 51%);
    }
}`;
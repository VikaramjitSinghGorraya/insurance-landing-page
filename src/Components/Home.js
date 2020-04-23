import React, { Component } from 'react'
import styled from 'styled-components'
import IntroImage from '../Images/image-intro-desktop.jpg'
import PatternImage from '../Images/bg-pattern-intro-right-desktop.svg'
export class Home extends Component {
    render() {
        return (
            <div>
                <OuterContainer>
                <ImageContainer>
                        <Image src={IntroImage}/>
                    </ImageContainer>
                <TextContainer className="textContainer">
                        <h1>Humanizing your insurance.</h1>
                        <p> Get your life insurance coverage easier and faster. We blend our
                            expertise and technology to help you find the plan that’s right
                            for you. Ensure you and your loved ones are protected.
                        </p>
                        <Button>VIEW PLANS</Button>
                    </TextContainer>
                </OuterContainer>
            </div>
        )
    }
}

export default Home
const OuterContainer = styled.div`
display:grid;
grid-template-columns:100%;
@media (min-width:960px){
    position:relative;
    grid-template-columns: 20% 1fr 1fr 20%;
    grid-template-rows: 10% 1fr 1fr 1fr 10%;
    grid-gap:20px;
}

`;
const ImageContainer = styled.div`
@media (min-width:960px){
    grid-column: 3/span 2;
    grid-row: 2/span 3;
    position:relative;
    padding: 20vh 2vw;
    z-index:99;
}
`;

const Image = styled.img`
    width:100%;
    
`;
const TextContainer = styled.div`
    background-color: hsl(256, 26%, 20%);
    color:white;
    display:grid;
    grid-template-columns:100%;
    text-align:center;   
    place-items:center;
    h1{
        font-size: 3em;
        line-height: 1;
        position: relative;
        margin: 0;
    }
    p{
        font-size:smaller;
    }
    
   @media (min-width:960px){
       position:relative;
      grid-template-columns: 50%;
       grid-column: 1/span 4;
       grid-row: 2/span 3;
       text-align:left;
       place-items:start;
       padding: 35vh 5vw;

       h1{
        font-size: 3.5em;
        line-height: 1;
        position: relative;
        margin: 0;
        }
        p{
            font-size:larger;
        }

       &::before{
        content:'';
        width:15vw;
        height:2px;
        background-color: white;
        position:absolute;
        top:20vh;
        left:5vw;
        align-self:center;
       }
   }
   @media (max-width:640px) and (orientation:landscape){
   place-items:center;
    height:90vh;
    padding:0 20vw;;
    margin:0;
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
    margin-bottom:5vh;
    @media (min-width:960px){
        &:hover{
            background-color:white;
            color:hsl(273, 4%, 51%);
        }
    }
`;
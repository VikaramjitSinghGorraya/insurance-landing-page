import React, { Component } from 'react'
import Logo from '../Images/logo.svg'
import Facebook from '../Images/icon-facebook.svg'
import Twitter from '../Images/icon-twitter.svg'
import Instagram from '../Images/icon-instagram.svg'
import Pintrest from '../Images/icon-pinterest.svg'
import Pattern from '../Images/bg-pattern-footer-desktop.svg'
import styled from 'styled-components'
export class SocialLinks extends Component {
    render() {
        return (
            <OuterContainer>
                <ImagesContainer>
                    <LogoImageContainer>
                        <Image className="logoImage" src={Logo} alt="logo"/>
                    </LogoImageContainer>
                    <MediaImagesContainer >
                        <Image className="socialImage" src={Facebook} alt="logo"/>
                        <Image className="socialImage" src={Twitter} alt="logo"/>
                        <Image className="socialImage" src={Instagram} alt="logo"/>
                        <Image className="socialImage" src={Pintrest} alt="logo"/>
                    </MediaImagesContainer>
                </ImagesContainer>
                <OtherInformation>
                    <div>
                        <h4>OUR COMPANY</h4>
                            <ul>
                                <li>HOW WE WORK</li>
                                <li>WHY INSURE?</li>
                                <li>VIEW PLANS</li>
                                <li>REVIEWS</li>
                            </ul>
                    </div>
                    <div>
                        <h4>Help me</h4>
                        <ul>
                            <li>FAQ</li>
                            <li>Terms of use</li>
                            <li>Privacy policy</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li>Sales</li>
                            <li>Support</li>
                            <li>Live chat</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Others</h4>
                        <ul>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Licenses</li>
                        </ul>
                    </div>
                </OtherInformation>
            </OuterContainer>
        )
    }
}

export default SocialLinks

const OuterContainer = styled.div`
    display:grid;
    grid-template-columns:100%;
    background-color:hsl(0, 0%, 98%);
    place-items:center;
    padding:2vh 0;
    position:relative;
    h4{
        color: #d8d8d8;
    font-size: 1.2em;
    }
@media (min-width:960px){
    padding:15vh 5vw;
   grid-gap:25px;
   img:nth-of-type(0){
       position:absolute;
       top:-10vh;
       left:-10vw;
   }
}
   
`;
const ImagesContainer = styled.div`
    display:grid;
    grid-template-columns:100%:
    background-color:red;
    place-items:center;
    width:100%;
    position:relative;
    @media (min-width:960px){
        grid-template-columns: 50% 50%;
        width:100%;
        &::after{
            content:'';
            width:95vw;
            height:1px;
            background-color: black;
            position:absolute;
            top:6vh;
        }
    }
`;
const LogoImageContainer = styled.div`
    text-align:center;
    @media (min-width:960px){
        width:100%;
        text-align:left;
        margin:0 auto;
    }
`;
const MediaImagesContainer = styled.div`
padding-top:2vh;
display:grid;
grid-template-columns:10% 10% 10% 10%;
justify-content:center;
position:relative;
place-items:center;
width:100%;
@media (min-width:960px){
    width:90%;
    grid-template-columns:7% 7% 7% 7%;
    text-align:right;
    justify-content:end;
    padding-top:0;
    margin:0 auto;
}
`;

const Image = styled.img`
cursor:pointer;
`;

const OtherInformation = styled.div`
ul{
list-style-type:none;
margin:0;
padding:0;
}
display:grid;
grid-template-columns:100%;
text-align:center;
li{
    font-size:1.1em;
}
@media (min-width:960px){
    width:100%;
    grid-template-columns:25% 25% 25% 25%;
    justify-content:start;
    text-align:left;
    margin:0 auto;
    li:hover{
        text-decoration:underline;
        cursor:pointer;
    }
}
`;
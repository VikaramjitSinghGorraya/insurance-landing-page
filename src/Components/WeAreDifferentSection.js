import React, { Component } from 'react'
import styled from 'styled-components'
import SnappyProcessImage from '../Images/icon-snappy-process.svg'
import AffordablePriceImage from '../Images/icon-affordable-prices.svg'
import PeopleFirstImage from '../Images/icon-people-first.svg'

export class WeAreDifferentSection extends Component {
    render() {
        return (
            <>
                <OuterContainer>
                    <TextContainer>
                        <h1>We're different</h1>
                    </TextContainer>
                    <ContentContainer>
                    <SnappyProcess>
                            <Image src={SnappyProcessImage} alt="snappyProcessImage"/>
                            <h3>Snappy Process</h3>
                            <p>
                                Our application process can be completed in minutes, not hours.
                                Don’t get stuck filling in tedious forms.
                            </p>
                        </SnappyProcess>
                        <AffordablePrice>
                            <Image src={AffordablePriceImage} alt="affordablePriceImage"/>
                            <h3>Affordable Prices</h3>
                            <p>
                                We don’t want you worrying about high monthly costs. Our prices may
                                be low, but we still offer the best coverage possible.
                            </p>
                        </AffordablePrice>
                        <PeopleFirst>
                            <Image src={PeopleFirstImage} alt="peopleFirstImage"/>
                            <h3>People First</h3>
                            <p>
                                Our plans aren’t full of conditions and clauses to prevent payouts.
                                We make sure you’re covered when you need it.
                            </p>
                        </PeopleFirst>
                    </ContentContainer>
                </OuterContainer>  
            </>
        )
    }
}

export default WeAreDifferentSection

const OuterContainer = styled.div`
display:grid;
grid-template-columns:100%;
grid-row-gap:5vh;
text-align:center;
background-color:white;
h3{
    font-size: 1.5em;
}
p{
    opacity: 0.8;
    line-height: 1.7;
    padding:0 2vw;
   
}
`;
const TextContainer = styled.div`
position:relative;

&::before{
    content:'';
    width:35vw;
    height:1px;
    background-color: hsl(270, 9%, 17%);
    position:absolute;
    top:2vh;
    left:33%;
    align-self:center;
}`;
const SnappyProcess = styled.div``;
const AffordablePrice = styled.div``;
const PeopleFirst = styled.div``;
const Image = styled.img``;
const  ContentContainer = styled.div`
@media (min-width:960px){
    display:grid;
    grid-template-columns: 30% 30% 30%;
    justify-content:center;
}
@media (max-width:740px and orientation:landscape){
    padding:0 5vw;
}
`;

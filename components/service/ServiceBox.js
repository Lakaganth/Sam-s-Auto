import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const ServiceBox = ({ name, bg, content }) => {
  return (
    <Container bg={bg}>
      <div className="front-content-bg">
        <p>{name}</p>
      </div>
      <div className="back-content">
        <p>{content}</p>
      </div>
    </Container>
  );
};

export default ServiceBox;

const Container = styled.div`
  width: 335px;
  height: 350px;
 
  transition: all 0.3s ease-in-out;
  transform-style: preserve-3d;
  perspective: 900px;
  z-index: 10;

  /* background: linear-gradient(0deg, #1a0b0b 0%, rgba(111, 111, 111, 0) 109.24%),
    url("/static/images/service/engine.jpg") center top no-repeat; */
  /* ${({ bg }) =>
    bg &&
    ` background: linear-gradient(0deg, #1a0b0b 0%, rgba(111, 111, 111, 0) 109.24%),
     url(${bg}) center top no-repeat;`}
  background-size: cover; */
  width: 60%;
  margin: 0 auto;
  .front-content-bg {
    /* max-width: 0%; */
    margin: 0 auto;
    /* transform: translate3d(0, 100%, 0); */
    background: rgba(196, 196, 196, 0.14);
     border-radius: 7px;
  border: 2px solid #ffffff;
    ${({ bg }) =>
      bg &&
      ` background: linear-gradient(0deg, #1a0b0b 0%, rgba(111, 111, 111, 0) 109.24%),
     url(${bg}) center top no-repeat;`}
  background-size: cover;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(0deg);
    transition: 0.5s;
  }
  &:hover .front-content-bg {
    transform: rotateY(-180deg);
  }
  .back-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:#ffffff;
    color:black;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: 0.5s;
    border-radius:5px;
    /* border: 2px solid red; */
    
  }

  &:hover .back-content {
    transform: rotateY(0deg);
  }

  .front-content-bg  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 62px;
    line-height: 80px;
    text-align: center;
    letter-spacing: 0.055em;
    color: white;
   
  }

  .back-content p{
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.055em;
  }
 
  /* &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
  } */

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 90%;
    margin 0 auto;


    .front-content-bg p{
      /* font-size: 42px; */
    }
  `}
`;

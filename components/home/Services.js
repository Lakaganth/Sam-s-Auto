import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Engine from "../../public/static/images/landing/enginec.png";
import Battery from "../../public/static/images/landing/battery.png";
import Oilcan from "../../public/static/images/landing/oilc.png";

const Services = () => {
  return (
    <Container>
      <div className="bg-stripes"></div>
      <p>Our Services</p>
      <ServiceGrid>
        <ServiceBox className="engine ">
          <div className="face face1">
            <div className="content">
              <p>Engine Swap</p>
              <img src={Engine} alt="Engine" />
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum
              </p>
            </div>
          </div>
        </ServiceBox>
        <ServiceBox className="battery">
          <div className="face face1">
            <div className="content">
              <p>Electrical Repairs</p>
              <img src={Battery} alt="Battery" />
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum
              </p>
            </div>
          </div>
        </ServiceBox>
        <ServiceBox className="oil">
          <div className="face face1">
            <div className="content">
              <p>Maintainene</p>
              <img src={Oilcan} alt="Oilcan" />
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum
              </p>
            </div>
          </div>
        </ServiceBox>
      </ServiceGrid>
      <p className="more">And More...</p>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 100vw;
  /* height: 105vh; */
  background-color: #fff;
  overflow: hidden;
  position: relative;
  .bg-stripes {
    position: absolute;
    /* z-index: -10; */
    background: url("/static/images/service/stripes.svg") bottom center
      no-repeat;
    filter: blur(2px);
    top: 0vh;
    left: 30vw;
    background-size: cover;
    width: 120%;
    height: 101%;
    z-index: -10;
  }
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 39%;
    z-index: 10;
    /* identical to box height, or 19px */
    text-align: center;
    letter-spacing: 0.16em;
    color: #000000;
  }
  .more {
    text-align: right;
  }
    /* screen width is less than 450px (small) */
  ${media.lessThan("small")`
    /* height: 150vh; */
    p{
      font-size: 32px;
    line-height: 29%;
    }
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${media.between("small", "medium")`
    height: 180vh;
    p{
      font-size: 32px;
    line-height: 29%;
    }
  `}
  

`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  margin: 0 auto;
  z-index: 10;
  grid-gap: 30px;
  position: relative;
  .engine {
    img {
      padding-top: 50px;
      width: 110%;
    }
  }
  .battery {
    img {
      width: 100%;
    }
  }
  .oil {
    img {
      width: 100%;
    }
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
   width: 70%;
   .oil{
  width: 100%;
}
  `}
  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
   width: 70%;
   .oil{
  width: 100%;
}
  `}
`;
const ServiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  z-index: 10;
  position: relative;

  .face {
    transition: 0.5s;
  }

  .face1 {
    position: relative;
    z-index: 1;
    transform: translateY(100px);
    background: #151515;
    height: 60vh;
    border-radius: 23px;
    p {
      color: white;
    }
  }
  &:hover .face.face1 {
    transform: translateY(00px);
    background: #ff0057;
  }

  .face2 {
    position: relative;
    transform: translateY(-50vh);
    opacity: 0;
    height: 35vh;
    background: #151515;
    border-radius: 13px;
    color: white;
  }
  &:hover .face.face2 {
    transform: translateY(-3vh);
    opacity: 1;
  }
  .face2 .content {
    p {
      font-size: 18px;
      line-height: 24px;
      padding: 2vh 2vw;
      color: white;
    }
  }
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 48px;
    padding: 2vh 0;
    text-align: center;
    letter-spacing: 0.16em;
  }

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
   p{
    font-size: 20px;
   }
   .face2{
    height: 45vh;
   }
   .face2 .content {
    p{
      font-size: 16px;
    }}
img{
  width:40%;
}

  `}
`;

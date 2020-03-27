import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Engine from "../../public/static/images/landing/engine.png";
import Battery from "../../public/static/images/landing/battery.svg";
import Oilcan from "../../public/static/images/landing/oilcan.png";

const Services = () => {
  return (
    <Container>
      <div className="bg-stripes"></div>
      <p>Our Services</p>
      <ServiceGrid>
        <ServiceBox className="engine">
          <p>Engine Swap</p>
          <img src={Engine} alt="Engine" />
        </ServiceBox>
        <ServiceBox>
          <p>Electrical Repairs</p>
          <img src={Battery} alt="Battery" />
        </ServiceBox>
        <ServiceBox className="oil">
          <p>Maintainene</p>
          <img src={Oilcan} alt="Oilcan" />
        </ServiceBox>
      </ServiceGrid>
      <p className="more">And More...</p>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 100vw;
  height: 65vh;
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
    height: 120vh;
    p{
      font-size: 32px;
    line-height: 29%;
    }
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${media.between("small", "medium")`
    height: 150vh;
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  z-index: 10;
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
  img {
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
   p{
    font-size: 24px;
   }
img{
  width:40%;
}

  `}
`;

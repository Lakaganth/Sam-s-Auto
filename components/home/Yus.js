import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Price from "../../public/static/images/icons/price.svg";
import Reliable from "../../public/static/images/icons/reliable.svg";
import Warranty from "../../public/static/images/icons/warranty.svg";
import Quality from "../../public/static/images/icons/quality.svg";

const Yus = () => {
  return (
    <Container>
      <h3>Why Us</h3>
      <IconContainer>
        <div className="high-quality">
          <img src={Quality} alt="Quality" />
          <p>Quality</p>
        </div>
        <div className="reliable">
          <img src={Reliable} alt="reliable" />
          <p>Reliable</p>
        </div>
        <div className="warranty">
          <img src={Warranty} alt="Warranty" />
          <p>Warranty</p>
        </div>
        <div className="best-price">
          <img src={Price} alt="Price" />
          <p>Best Price</p>
        </div>
      </IconContainer>
    </Container>
  );
};

export default Yus;

const Container = styled.div`
  height: 45vh;
  width: 100%;
  background-color: #151515;
  h3{
    font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 72px;
/* identical to box height */

text-align: center;
letter-spacing: 0.16em;

color: #FFFFFF;
  }
    /* screen width is less than 450px (small) */
  ${media.lessThan("small")`
    height: 80vh;
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${media.between("small", "medium")`
  height: 80vh;
  `}

`;
const IconContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .high-quality{
    p{
      justify-self:flex-start;
text-align:left;
    }
    img{
      animation: qualityanim 1s forwards 0s ease-in-out;
    }
    @keyframes qualityanim {
    0% {
      transform: translateY(-80%);
      opacity: 0;
    }

    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  }

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 36px;
    transform: translate3d(0%, 0, 0);
    letter-spacing: 0.16em;
    color: white;
  }

  .best-price {
    img {
      width: 140px;
      height: 140px;
    }
  }
  div {
    transform: translate3d(25%, 0, 0);
    img {
      width: 120px;
      height: 120px;
    }
  }
    /* screen width is less than 450px (small) */
  ${media.lessThan("small")`
    width: 100%;
    padding: 1vh 1vw;
    grid-template-columns: repeat(2, 1fr);
    
    div {
    transform: translate3d(20%, 0, 0);
   
  }
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${media.between("small", "medium")`
  width: 100%;
    padding: 1vh 1vw;
    grid-template-columns: repeat(2, 1fr);
    div {
    transform: translate3d(20%, 0, 0);
  `}

`;

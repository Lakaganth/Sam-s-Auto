import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import MissionLogo from "../../public/static/images/icons/mission.svg";

const Mission = () => {
  return (
    <Container>
      <h3>Our Mission</h3>
      <img src={MissionLogo} alt="Mission" />
      <p>
        Provide high quality service within the promised time. Keep customer
        satisfied.
      </p>
    </Container>
  );
};

export default Mission;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #fff;
  font-family: "Quicksand", sans-serif;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.16em;
  }
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #2b2b2b;
    width: 60%;
    margin: 0 auto;
  }

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 130vh;
    h3{
      font-size: 32px;
    line-height: 32px;
    }
    img{
      width: 80%;
      margin: 0 auto;
    }
    p{
      font-size: 18px;
    line-height: 24px;
    /* padding-top:30vh; */
    }
  `}
  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 80vh;
    h3{
      font-size: 32px;
    line-height: 32px;
    }
    img{
      width: 60%;
      margin: 0 auto;
    }
    p{
      font-size: 24px;
    line-height: 24px;
    /* padding-top:30vh; */
    }
  `}
`;

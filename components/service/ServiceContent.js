import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import ServiceBox from "./ServiceBox";

const ServiceContent = () => {
  return (
    <Container>
      <div className="bg-stripes"></div>

      <ServiceGrid>
        <ServiceBox
          name="Engine Swap / Repair"
          bg="/static/images/service/engine.jpg"
          content="Sample"
        />
        <ServiceBox
          name="Electrical Repairs"
          bg="/static/images/service/electric.jpg"
          content="Sample"
        />
        <ServiceBox
          name="Brakes Check"
          bg="/static/images/service/brakes.jpg"
          content="Sample"
        />
        <ServiceBox
          name="Oil Change"
          bg="/static/images/service/oil.jpg"
          content="Sample"
        />
        <ServiceBox
          name="Air Filter Check"
          bg="/static/images/service/filter.jpg"
          content="Sample"
        />
        <ServiceBox
          name="General Services"
          bg="/static/images/service/general.jpg"
          content="Sample"
        />
      </ServiceGrid>
    </Container>
  );
};

export default ServiceContent;

const Container = styled.div`
  width: 100vw;
  background-color: #151515;
  position: relative;
  overflow: hidden;
  /* height: 100vh; */

  .bg-stripes {
    position: absolute;
  
    background: url("/static/images/service/stripes.svg") bottom center
      no-repeat;
    top: 10vh;
    left: 0;
    background-size: cover;
    width: 120%;
    height: 165%;

  }
    /* screen width is less than 450px (small) */
  ${media.lessThan("small")`
  padding-bottom: 5vh; 
.bg-stripes{
  top: 0vh;
  width: 100%;
    height: 65%;
}
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${media.between("small", "medium")`
    .bg-stripes{
  top: 0vh;
  width: 100%;
    height: 65%;
}
  `}
`;

const ServiceGrid = styled.div`
  z-index: 10;
  margin: 15vh 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 95px;
    /* screen width is less than 450px (small) */
  ${media.lessThan("small")`
    grid-template-columns: repeat(1, 1fr);
    margin: 5vh 0;
    grid-gap: 30px;
  `}
    /* screen width is between 450px and 768px (small to medium) */
  ${media.between("small", "medium")`
    grid-template-columns: repeat(1, 1fr);
    margin: 5vh 0;
    grid-gap: 70px;
  `}
    /* screen width is between 768px (medium) and 1170px (large) */
  ${media.between("medium", "large")`
    margin: 4vh 0;
  `}

`;

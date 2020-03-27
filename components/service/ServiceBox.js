import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const ServiceBox = ({ name, bg }) => {
  return (
    <Container bg={bg}>
      <div className="content-bg">
        <p>{name}</p>
      </div>
    </Container>
  );
};

export default ServiceBox;

const Container = styled.div`
  width: 335px;
  height: 350px;
  border-radius: 7px;
  border: 2px solid #ffffff;
  transition: all 0.3s ease-in-out;
  z-index: 10;

  /* background: linear-gradient(0deg, #1a0b0b 0%, rgba(111, 111, 111, 0) 109.24%),
    url("/static/images/service/engine.jpg") center top no-repeat; */
  ${({ bg }) =>
    bg &&
    ` background: linear-gradient(0deg, #1a0b0b 0%, rgba(111, 111, 111, 0) 109.24%),
     url(${bg}) center top no-repeat;`}
  background-size: cover;
  width: 60%;
  margin: 0 auto;
  .content-bg {
    max-width: 40%;
    margin: 0 auto;
    transform: translate3d(0, 100%, 0);
    background: rgba(196, 196, 196, 0.14);
    border-radius: 5px;
  }
  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.055em;
    color: #ffffff;
  }
  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    .content-bg{
      max-width: 60%;
      transform: translate3d(0, 80%, 0);
    }
  `}
`;

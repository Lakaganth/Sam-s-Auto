import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../public/static/images/landing/19019-loading-animation.json";
import styled from "styled-components";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loader = () => {
  return (
    <LoadCont>
      <div>
        <h1>Loading...</h1>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </LoadCont>
  );
};

export default Loader;

const LoadCont = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #151515;
  margin: 0;
  padding: 0;

  div {
    h1 {
      text-align: center;
      color: White;
      font-family: Poppins;
    }
    background-color: #151515;
    padding-top: 10vh;
  }
`;

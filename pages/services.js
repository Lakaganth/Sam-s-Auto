import React from "react";
import styled from "styled-components";
import NavbarComp from "../components/UI/NavbarComp";
import Head from "next/head";
import ServiceBox from "./../components/service/ServiceBox";
import ServiceBanner from "../components/service/ServiceBanner";
import ServiceContent from "../components/service/ServiceContent";
import Footer from "../components/UI/Footer";

const services = () => {
  return (
    <div>
      <Head>
        <title>Sam's Auto | Services</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins|Quicksand|Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container>
        <ServiceBanner />
        <ServiceContent />
        <Footer />
      </Container>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default services;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  line-height: 1.3;
  overflow-x: hidden;
`;

// const Container = styled.div`
//   width: 100vw;
//   line-height: 1.3;
//   margin: 0;
//   background-color: #151515;
//   /* height: 300vh; */
//   position: relative;
//   z-index: -20;
//   overflow: hidden;

// `;
// const BannerBG = styled.div`
//   width: 100vw;
//   height: 60vh;
//   background: url("/static/images/service/service-banner.png") bottom center
//     no-repeat;
//   background-size: cover;
//   .banner-title {
//     height: 60%;
//     width: 100%;
//     background: rgba(67, 67, 67, 0.44);

//     transform: translate3d(0, 35%, 0);
//   }
//   p {
//     font-family: Quicksand;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 100px;
//     line-height: 125px;
//     text-align: center;
//     letter-spacing: 0.725em;
//     transform: translate3d(0, 65%, 0);
//     color: #ffffff;
//   }
// `;

// const ServiceGrid = styled.div`
//   z-index: 10;
//   margin: 15vh 0;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-gap: 95px;
// `;

import React from "react";
import Head from "next/head";
import styled from "styled-components";
import media from "styled-media-query";
import Landing from "./../components/home/Landing";
import Yus from "../components/home/Yus";
import Services from "./../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Team from "../components/home/Team";
import Mission from "./../components/home/Mission";
import Footer from "../components/UI/Footer";
import NavbarComp from "../components/UI/NavbarComp";

const index = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins|Quicksand|Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        >
      </Head>
      <Container>
        <Landing />
        <Services />
        <Yus />
        <Testimonials />
        <Team />
        <Mission />
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

export default index;

const Container = styled.div`
  width: 100vw;
  line-height: 1.3;
  margin: 0;
  overflow: hidden;

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 100vw;
  `}
`;

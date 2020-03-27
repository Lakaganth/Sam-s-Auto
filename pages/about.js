import React from "react";
import styled from "styled-components";
import Head from "next/head";
import AboutBanner from "../components/about/AboutBanner";
import AboutContent from "./../components/about/AboutContent";
import Footer from "../components/UI/Footer";

const about = () => {
  return (
    <div>
      <Head>
        <title>Sam's Auto | About</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,300|Quicksand|Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container>
        <AboutBanner />
        <AboutContent />
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

export default about;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  line-height: 1.3;
`;

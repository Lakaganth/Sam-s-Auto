import React from "react";
import Head from "next/head";
import styled from "styled-components";
import ContactBanner from "../components/contact/ContactBanner";
import ContactForm from "./../components/contact/ContactForm";
import ContactSocials from "../components/contact/ContactSocials";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Sam's Auto| Contact</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins|Quicksand|Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container>
        <ContactBanner />
        <ContactForm />
        <ContactSocials />
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

export default contact;

const Container = styled.div`
  width: 100vw;
  line-height: 1.3;
  margin: 0;
  overflow: hidden;
`;

import React, { useEffect, useCallback, useState } from "react";
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
import fb from "../fbconfig";
import Loader from "../components/UI/Loader";

const index = () => {
  let testimonials = [];
  const [test, setTest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTestimonials();
    setTimeout(() => setLoading(false), 0);
    // setTimeout(() => setLoading(false), 2400);
  }, []);

  const getTestimonials = useCallback(async () => {
    const documents = await fb.firestore().collection("testimonials").get();

    await documents.forEach((doc) =>
      testimonials.push({ id: doc.id, ...doc.data() })
    );
    setTest(testimonials);
  }, []);

  return (
    <div>
      <Head>
        <title>Sam's Auto | Home</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins|Quicksand|Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/a21f7fe221.js"
          crossOrigin="anonymous"
        ></script>
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
      {test.length > 0 && !loading ? (
        <Container>
          <Landing />
          <Services />
          <Yus />
          <Testimonials testimonials={test} />
          <Team />
          <Mission />
          <Footer />
        </Container>
      ) : (
        <Loader />
      )}
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
  overflow-x: hidden;

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 100vw;
  `}
`;

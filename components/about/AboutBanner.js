import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import NavbarComp from "../UI/NavbarComp";
import { motion } from "framer-motion";

const AboutBanner = () => {
  return (
    <Container>
      <NavbarComp />
      <BannerBG>
        <ContentDiv>
          <p>Our Team</p>
        </ContentDiv>
      </BannerBG>
      <p className="about-intro">
        Meet our highly skilled team to deliver you the best
      </p>
      <motion.div
        className="scroll-arrow"
        initial={{
          y: 5,
          opacity: 0,
        }}
        animate={{
          y: 8,
          opacity: 1,
        }}
        exit={{ y: 304, opacity: 0 }}
        transition={{
          duration: 4,
          ease: "linear",
          loop: Infinity,
          repeatDelay: 1,
        }}
      >
        <svg
          width="100%"
          height="40"
          viewBox="0 0 82 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.9393 25.0607C40.5251 25.6464 41.4749 25.6464 42.0607 25.0607L51.6066 15.5147C52.1924 14.9289 52.1924 13.9792 51.6066 13.3934C51.0208 12.8076 50.0711 12.8076 49.4853 13.3934L41 21.8787L32.5147 13.3934C31.9289 12.8076 30.9792 12.8076 30.3934 13.3934C29.8076 13.9792 29.8076 14.9289 30.3934 15.5147L39.9393 25.0607ZM39.5 6.55671e-08L39.5 24L42.5 24L42.5 -6.55671e-08L39.5 6.55671e-08Z"
            fill="#A8A8A8"
          />
          <path
            d="M7.1736 51.168C6.0856 51.168 5.1336 50.976 4.3176 50.592C3.5016 50.208 2.8616 49.688 2.3976 49.032C1.9496 48.376 1.6936 47.648 1.6296 46.848H2.7576C2.8856 47.728 3.2936 48.512 3.9816 49.2C4.6856 49.888 5.7496 50.232 7.1736 50.232C8.0056 50.232 8.7256 50.08 9.3336 49.776C9.9576 49.472 10.4376 49.056 10.7736 48.528C11.1096 48 11.2776 47.416 11.2776 46.776C11.2776 45.96 11.0776 45.312 10.6776 44.832C10.2936 44.352 9.8056 43.992 9.2136 43.752C8.6376 43.512 7.8536 43.256 6.8616 42.984C5.7736 42.696 4.8936 42.408 4.2216 42.12C3.5656 41.832 3.0056 41.392 2.5416 40.8C2.0936 40.192 1.8696 39.368 1.8696 38.328C1.8696 37.528 2.0776 36.8 2.4936 36.144C2.9256 35.472 3.5336 34.944 4.3176 34.56C5.1016 34.176 6.0056 33.984 7.0296 33.984C8.5176 33.984 9.7176 34.352 10.6296 35.088C11.5416 35.824 12.0856 36.728 12.2616 37.8H11.1096C11.0136 37.368 10.7976 36.928 10.4616 36.48C10.1416 36.032 9.6776 35.664 9.0696 35.376C8.4776 35.072 7.7656 34.92 6.9336 34.92C5.8136 34.92 4.8696 35.232 4.1016 35.856C3.3336 36.464 2.9496 37.28 2.9496 38.304C2.9496 39.12 3.1496 39.776 3.5496 40.272C3.9496 40.752 4.4376 41.12 5.0136 41.376C5.6056 41.616 6.3976 41.864 7.3896 42.12C8.4936 42.424 9.3656 42.72 10.0056 43.008C10.6616 43.28 11.2136 43.72 11.6616 44.328C12.1256 44.92 12.3576 45.728 12.3576 46.752C12.3576 47.504 12.1576 48.216 11.7576 48.888C11.3576 49.56 10.7656 50.112 9.9816 50.544C9.2136 50.96 8.2776 51.168 7.1736 51.168ZM18.7587 44.472C18.7587 43.112 19.0227 41.928 19.5507 40.92C20.0947 39.912 20.8387 39.144 21.7827 38.616C22.7427 38.072 23.8387 37.8 25.0707 37.8C26.7027 37.8 28.0387 38.208 29.0787 39.024C30.1347 39.84 30.7907 40.936 31.0467 42.312H29.9187C29.7107 41.192 29.1667 40.312 28.2867 39.672C27.4227 39.032 26.3507 38.712 25.0707 38.712C24.1107 38.712 23.2387 38.928 22.4547 39.36C21.6707 39.776 21.0387 40.424 20.5587 41.304C20.0947 42.168 19.8627 43.224 19.8627 44.472C19.8627 45.736 20.0947 46.8 20.5587 47.664C21.0387 48.528 21.6707 49.176 22.4547 49.608C23.2387 50.04 24.1107 50.256 25.0707 50.256C26.3507 50.256 27.4227 49.936 28.2867 49.296C29.1667 48.656 29.7107 47.776 29.9187 46.656H31.0467C30.7907 48.016 30.1347 49.112 29.0787 49.944C28.0227 50.776 26.6867 51.192 25.0707 51.192C23.8387 51.192 22.7427 50.92 21.7827 50.376C20.8387 49.832 20.0947 49.056 19.5507 48.048C19.0227 47.024 18.7587 45.832 18.7587 44.472ZM39.2569 40.656C39.5769 39.696 40.1449 38.968 40.9609 38.472C41.7769 37.96 42.8169 37.704 44.0809 37.704V38.832H43.7209C42.4409 38.832 41.3769 39.2 40.5289 39.936C39.6809 40.656 39.2569 41.84 39.2569 43.488V51H38.1769V37.968H39.2569V40.656ZM56.1435 51.192C54.9275 51.192 53.8315 50.92 52.8555 50.376C51.8795 49.832 51.1115 49.056 50.5515 48.048C50.0075 47.024 49.7355 45.832 49.7355 44.472C49.7355 43.128 50.0155 41.952 50.5755 40.944C51.1355 39.92 51.9035 39.144 52.8795 38.616C53.8715 38.072 54.9755 37.8 56.1915 37.8C57.4075 37.8 58.5035 38.072 59.4795 38.616C60.4555 39.144 61.2155 39.912 61.7595 40.92C62.3195 41.928 62.5995 43.112 62.5995 44.472C62.5995 45.832 62.3195 47.024 61.7595 48.048C61.1995 49.056 60.4235 49.832 59.4315 50.376C58.4555 50.92 57.3595 51.192 56.1435 51.192ZM56.1435 50.232C57.0875 50.232 57.9675 50.024 58.7835 49.608C59.6155 49.176 60.2795 48.528 60.7755 47.664C61.2715 46.8 61.5195 45.736 61.5195 44.472C61.5195 43.224 61.2715 42.168 60.7755 41.304C60.2795 40.44 59.6235 39.8 58.8075 39.384C57.9915 38.952 57.1115 38.736 56.1675 38.736C55.2235 38.736 54.3435 38.952 53.5275 39.384C52.7275 39.8 52.0795 40.44 51.5835 41.304C51.0875 42.168 50.8395 43.224 50.8395 44.472C50.8395 45.736 51.0795 46.8 51.5595 47.664C52.0555 48.528 52.7035 49.176 53.5035 49.608C54.3195 50.024 55.1995 50.232 56.1435 50.232ZM70.7963 33.24V51H69.7163V33.24H70.7963ZM79.6753 33.24V51H78.5953V33.24H79.6753Z"
            fill="#E4E3E3"
            fillOpacity="0.46"
          />
        </svg>
      </motion.div>
    </Container>
  );
};
export default AboutBanner;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #151515;
  color: white;
  .about-intro {
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 62px;
    text-align: center;
    letter-spacing: 0.055em;
    color: #fcfcfc;
    width: 40%;
    margin: 6vh auto;
    animation: heropanimation 1s forwards 0s ease-in-out;

    @keyframes heropanimation {
      0% {
        transform: translateY(80%);
        opacity: 0;
      }

      100% {
        transform: translateY(0%);
        opacity: 1;
      }
    }
    /* margin-top: 10vh; */
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    .about-intro{
      font-size: 32px;
    line-height: 42px;
    width: 80%;
    }  
  `}
  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    .about-intro{
      font-size: 32px;
    line-height: 42px;
    width: 80%;
    } 
  `}
`;

const BannerBG = styled.div`
  width: 100vw;
  height: 424px;
  overflow: hidden;
  background: url("/static/images/about/about-ban.png") center center no-repeat;
  background-size: cover;
  animation: bannerAnimation 1s forwards 0s ease-in-out;
  @keyframes bannerAnimation {
    0% {
      transform: translateY(-80%);
      opacity: 0;
    }

    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  ${media.lessThan("small")`
       height: 250px;
  `}
  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 250px;
  `}
`;

const ContentDiv = styled.div`
  width: 100vw;
  height: 60%;
  background: rgba(67, 67, 67, 0.44);
  /* transform: translate3d(0, 0%, 0); */
  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    line-height: 132%;
    text-align: center;
    letter-spacing: 0.345em;
    transform: translate3d(0, 50%, 0);
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 30%;
      transform: translate3d(0, 10%, 0);
      p{
        font-size: 52px;
    line-height: 80%;
      }
  `}

  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 30%;
      transform: translate3d(0, 80%, 0);
      p{
        font-size: 32px;
    line-height: 50%;
      }
  `}
`;

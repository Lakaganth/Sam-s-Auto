import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Slider from "react-slick";
import Quote from "../../public/static/images/icons/quote.svg";

const Testimonials = () => {
  let settings = {
    dots: true,
    centerMode: true,
    centerPadding: "0px",
    centerMargin: "10px",
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <Container>
      <Slider {...settings}>
        <TestCard>
          <div className="test-inner">
            <img src={Quote} alt="Quote" />
            <p className="comment">The service was excellent</p>
            <p className="cx-name">Sathya</p>
            <p className="cx-car">Chrysler 200c</p>
          </div>
        </TestCard>
        <TestCard>
          <div className="test-inner">
            <img src={Quote} alt="Quote" />
            <p className="comment">The service was excellent</p>
            <p className="cx-name">Sathya</p>
            <p className="cx-car">Chrysler 200c</p>
          </div>
        </TestCard>
        <TestCard>
          <div className="test-inner">
            <img src={Quote} alt="Quote" />
            <p className="comment">The service was excellent</p>
            <p className="cx-name">Sathy</p>
            <p className="cx-car">Chrysler 200c</p>
          </div>
        </TestCard>
        <TestCard>
          <div className="test-inner">
            <img src={Quote} alt="Quote" />
            <p className="comment">
              The service was excellent, the car was delivered as promised and
              timing was impecciable
            </p>
            <p className="cx-name">Sathy</p>
            <p className="cx-car">Chrysler 200c</p>
          </div>
        </TestCard>
      </Slider>
    </Container>
  );
};

export default Testimonials;

const Container = styled.div`
  width: 80%;
  margin: 10vh auto;
  height: 80vh;
  background-color: #fff;
  .slick-next:before,
  .slick-prev:before {
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: #151515;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 100%;
    height: 50vh;
    margin: 0vh auto;

  `}
`;

const TestCard = styled.div`
  width: 55vw;
  height: 75vh;
  background-color: white;
  margin: 0 10px;
  padding: 10px;

  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  img {
    transform: translate3d(0, -45%, 0);
    padding-left: 8vw;
  }
  div {
    width: 80%;
    height: 70%;
    margin: 0 auto;
    background-color: #fdfdfd;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    transform: translate3d(0, 35%, 0);
  }
  button {
    background-color: black;
  }
  .comment {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.045em;
    color: #000000;
    width: 80%;
    margin: 0 auto;
    transform: translate3d(0, -5%, 0);
  }

  .cx-name {
    font-size: 28px;
    font-weight: 500;
    color: gray;
    transform: translate3d(0, -25%, 0);
  }
  .cx-car {
    letter-spacing: 0.04em;
    transform: translate3d(0, -125%, 0);
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    img {   
    padding-left: 25vw;
  }
  div {
    width: 90%;
    height: 70%;
    
    transform: translate3d(0, 15%, 0);
  }
    
  `}
`;

import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Map from "../../public/static/images/landing/map.png";
import Facebook from "../../public/static/images/landing/facebook.svg";
import Insta from "../../public/static/images/landing/insta.svg";
import Phone from "../../public/static/images/landing/phone.svg";

const Footer = () => {
  return (
    <Container>
      <FotterGrid>
        <div className="address">
          <a href="https://www.google.com/maps/dir//sam's+auto+norfinch/@43.7784626,-79.4512931,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x882b3027a9c588d7:0xd9ed80a3353b1e20!2m2!1d-79.5294928!2d43.7651579!3e0">
            <img src={Map} alt="amp" />
          </a>
          <p>155 Norfinch Dr #3, North York, ON M3N 1Y2</p>
        </div>
        <div className="contact">
          <a href="#">
            <img src={Facebook} alt="Facebook" />
            {/* <i className="fab fa-facebook-f"></i> */}
          </a>
          <p>/samautos</p>

          <a href="#">
            {/* <i className="fab fa-instagram"></i> */}
            <img src={Insta} alt="Insta" />
          </a>
          <p>@samautos</p>

          <a href="#">
            <img src={Phone} alt="Phone" />
            {/* <i className="fas fa-phone"></i> */}
          </a>
          <p>555-555-5555</p>
        </div>
      </FotterGrid>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: #151515;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  padding-top: 25px;
  /* identical to box height */
  letter-spacing: 0.05em;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 100vh;
    font-size: 20px;
  line-height: 24px;
  `}
  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    font-size: 18px;
    line-height: 24px;
  `}
`;

const FotterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .address {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    p {
      width: 60%;
      margin: 0 auto;
    }
  }
  .contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* img {
      justify-self: center;
      transform: translate3d(0, 100%, 0);
    } */
    a {
      display: inline-block;
      width: 90px;
      height: 90px;
      background: gray;
      margin: 10px;
      border-radius: 30%;
      box-shadow: 0 5px 15px -5px #00000070;
      color: #3498db;
      overflow: hidden;
      position: relative;
    }
    img {
      line-height: 90px;
      margin-top: 20px;
      font-size: 26px;
      transition: 0.2s linear;
    }
    a:hover img {
      transform: scale(1.3);
      color: #f1f1f1;
    }
    a::before {
      content: "";
      position: absolute;
      width: 120%;
      height: 120%;
      background: #3498db;
      transform: rotate(45deg);
      left: -110%;
      top: 90%;
    }
    a:hover::before {
      animation: contactanim 0.7s 1;
      top: -10%;
      left: -10%;
    }
    @keyframes contactanim {
      0% {
        left: -110%;
        top: 90%;
      }
      50% {
        left: 10%;
        top: -30%;
      }
      100% {
        top: -10%;
        left: -10%;
      }
    }
    p {
      text-align: left;
    }
  }
  ${media.lessThan("small")`
    display: flex;
 flex-direction:column;
 .contact {
   img{
    transform: translate3d(0, 20%, 0);
   }
 }
  `}

  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    .address{
      width:90%;
      margin-left: 3vw;
      img{
        width: 50vw;
      }
    }
.contact{
  img{
    transform: translate3d(0, 20%, 0);
   }
}
  `}
`;

const IconContainer = styled.div``;

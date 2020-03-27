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
          <img src={Facebook} alt="Facebook" />
          <p>/samautos</p>

          <img src={Insta} alt="Insta" />
          <p>@samautos</p>

          <img src={Phone} alt="Phone" />
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
  /* identical to box height */
  letter-spacing: 0.05em;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 80vh;
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
    img {
      justify-self: center;
      transform: translate3d(0, 100%, 0);
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

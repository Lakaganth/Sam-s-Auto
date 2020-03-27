import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import TeamCard from "./TeamCard";
import Sam from "../../public/static/images/about/samavatar.png";
import Guru from "../../public/static/images/about/guru.png";
import Sathya from "../../public/static/images/about/sathya.png";
import Laka from "../../public/static/images/about/laka.png";
import Harsha from "../../public/static/images/about/harsha.png";

const AboutContent = () => {
  return (
    <Container>
      <BGstripes></BGstripes>
      <SamCard>
        <img src={Sam} alt="Sam" />
        <p className="name">Sam</p>
        <p className="title">The Chief</p>
        <p className="desc">
          The CEO of Sam’s auto. Great mechanic and solution provider. Friendly
          and great to have a chat with. Enjoy’s BBQ
        </p>
      </SamCard>
      <TeamGrid>
        <TeamCard
          name="Guru"
          title="The Engine Guy"
          desc="Specializes in Engine swap. Highly knowlegable in
car tech. Will transform your car into
the beast you dream of. Loves his Dodge"
          img={Guru}
        />
        <TeamCard
          name="Sathya"
          title="Spark Man"
          desc="Knows his way around your
car’s nervous system.
Electrical and wiring specialist.
Also the IT guy."
          img={Sathya}
        />
        <TeamCard
          name="Laka"
          title="Designer"
          desc="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          img={Laka}
        />
        <TeamCard
          name="Harsha"
          title="Master"
          desc="Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          img={Harsha}
        />
      </TeamGrid>
    </Container>
  );
};

export default AboutContent;

const Container = styled.div`
  width: 100vw;
  background-color: #fff;
  height: 200vh;
  z-index: 20;
  position: relative;
  overflow: hidden;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 350vh;    
  `}

  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 350vh;   
  `}
`;

const BGstripes = styled.div`
  position: absolute;
  /* z-index: -10; */
  background: url("/static/images/about/stripes.svg") bottom center no-repeat;

  top: -10vh;
  left: 0;
  background-size: cover;
  width: 100%;
  height: 160%;
  z-index: -10;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 100%;    
  `}
  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 100%; 
  `}
`;

const SamCard = styled.div`
  width: 40vw;
  height: 35vh;
  background: #ffffff;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25), -6px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-family: Poppins;
  font-style: thin;
  color: #000000;
  text-align: center;
  /* transform: translate3d(50%, -35%, 0); */
  z-index: 10;
  margin-top: 20vh;
  position: absolute;
  top: 10vh;
  left: 30vw;
  img {
    width: 35%;
    position: absolute;
    top: -60%;
    left: 33%;
    /* height: 25%; */
  }
  .name {
    font-weight: 300;
    font-size: 48px;
    letter-spacing: 0.21em;
    margin: 50px 0 0 0;
  }
  .title {
    font-weight: 200;
    font-size: 32px;
    line-height: 132%;
    margin: 10px 0 0 0;
    letter-spacing: 0.21em;
    color: #6c6a6a;
  }
  .desc {
    font-weight: 200;
    font-size: 18px;
    line-height: 132%;
    width: 80%;
    margin: 25px auto;
    /* or 32px */

    letter-spacing: 0.03em;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    margin-top: 10vh;
    width: 80vw;
    top: 10vh;
  left: 10vw;
  height: 40vh;
    img {
    width: 55%;   
    top: -45%;
    left: 25%;
    /* height: 25%; */
  }
    `}

  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    margin-top: 10vh;
    width: 80vw;
    top: 10vh;
  left: 10vw;
  height: 40vh;
    img {
    width: 45%;   
    top: -45%;
    left: 25%;
  `}
`;

const TeamGrid = styled.div`
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 90vh;
  overflow: hidden;
  /* grid-gap: 25%; */
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    grid-template-columns: repeat(1, 1fr);
    padding-top: 80vh;
    width: 80%;
  margin: 0 auto;
  grid-gap:10vh;
  `}

  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    grid-template-columns: repeat(1, 1fr);
    padding-top: 80vh;
    width: 80%;
  margin: 0 auto;
  grid-gap:10vh;
  `}
`;

import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const TeamCard = ({ name, title, img, desc }) => {
  return (
    <Container>
      <Card>
        <img src={img} alt={name} />
        <div className="name">{name}</div>
        <div className="title"> {title} </div>
        <div className="desc">{desc} </div>
      </Card>
    </Container>
  );
};

export default TeamCard;

const Container = styled.div`
  width: 50vw;
  height: 55vh;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 90vw;
  height: 55vh;
  `}
  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    width: 90vw;
   height: 55vh;
  `}
`;
const Card = styled.div`
  width: 40vw;
  height: 35vh;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: relative;
  font-family: Poppins;
  font-style: thin;
  color: #000000;
  text-align: center;
  img {
    width: 30%;
    /* height: 60%; */
    position: absolute;
    top: -45%;
    left: 33%;
  }
  .name {
    font-weight: 300;
    font-size: 48px;
    letter-spacing: 0.21em;
    padding: 8vh 0 0 0;
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
    width: 90%;
  height: 45vh;
  img {
    width: 30%;
    /* height: 60%; */
    position: absolute;
    top: -15%;
    left: 33%;
  }
  .name { 
    font-size:32px;
    padding: 7vh 0 0 0;
  }
  .title { 
    font-size: 24px;   
    margin: 5px 0 0 0;  
  }
  .desc {
    font-weight: 200;
    font-size: 18px;
    line-height: 132%;
    width: 80%;
    margin: 5px auto;
    /* or 32px */

  }
  `}
  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    width: 90%;
  height: 45vh;
  img {
    width: 40%;
   
    position: absolute;
    top: -35%;
    left: 33%;
  }
  .name { 
    font-size:32px;
    padding: 7vh 0 0 0;
  }
  .title { 
    font-size: 24px;   
    margin: 5px 0 0 0;  
  }
  .desc {
    font-weight: 200;
    font-size: 18px;
    line-height: 132%;
    width: 80%;
    margin: 5px auto;
    /* or 32px */
  }
  `}
`;

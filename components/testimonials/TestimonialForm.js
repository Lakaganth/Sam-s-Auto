import React, { useState } from "react";

import styled from "styled-components";
import media from "styled-media-query";

import fb from "./../../fbconfig";

const TestimonialForm = () => {
  const [name, setName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [comment, setComment] = useState("");

  const handleCommentSubmission = async () => {
    const input = {
      cxName: name,
      cxCarModel: carModel,
      service: serviceType,
      cxComment: comment,
    };
    const submission = await fb
      .firestore()
      .collection("testimonials")
      .add(input);

    console.log(submission);
  };

  return (
    <Container>
      <FormBox>
        <h3>Testimonial Form</h3>
        <InputGroup>
          <input
            className="name-input"
            type="text"
            name="name"
            value={name}
            placeholder="Customer Name"
            onChange={(name) => setName(name.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <input
            className="model-input"
            type="text"
            name="carModel"
            value={carModel}
            placeholder="Car Model"
            onChange={(model) => setCarModel(model.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <input
            className="service-input"
            type="text"
            name="serviceType"
            value={serviceType}
            placeholder="Service Type"
            onChange={(service) => setServiceType(service.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <input
            className="comment-input"
            type="text"
            name="comment"
            value={comment}
            placeholder="Customer Comment"
            onChange={(comment) => setComment(comment.target.value)}
          />
        </InputGroup>
        <button
          onClick={handleCommentSubmission}
          disabled={!name || !carModel || !serviceType || !comment}
        >
          Submit
        </button>
      </FormBox>
    </Container>
  );
};

export default TestimonialForm;

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

const FormBox = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 15px;
  h3 {
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    text-align: center;
  }
  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.345em;
    margin: 0 auto;

    color: #767676;
  }
  button {
    width: 155px;
    height: 51px;
    background-color: #ff3838;
    color: #ffffff;
    font-size: 24px;
    border: none;
    margin: 0 40%;
    border-radius: 10px;
    box-shadow: 6px 4px 16px -2px rgba(134, 143, 179, 1);
    cursor: pointer;
  }
  ${media.lessThan("small")`
  width: 90%;

    /* screen width is less than 450px (small) */
p{
  font-size: 32px;
    line-height: 60px;
}
button{
  margin: 0 30%;
}
  `}

  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    width: 90%;
    height: 80vh;
   
p{
  font-size: 32px;
    line-height: 60px;
}
button{
  margin: 0 40%;
}
  `}
`;

const InputGroup = styled.div`
  width: 70%;
  margin: 2vh auto;
  font-family: Quicksand;
  input {
    width: 100%;
    height: 5vh;
    margin: 1vh 0;
    padding-left: 2vw;
    border: 1px gray solid;
    border-radius: 5px;
  }
  textarea {
    width: 100%;
    height: 25vh;
    margin: 1vh 0;
    padding-left: 2vw;
    border: 1px gray solid;
    border-radius: 5px;
    padding-top: 1vh;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    textarea {
      height: 50vh;
    }
  `}
`;

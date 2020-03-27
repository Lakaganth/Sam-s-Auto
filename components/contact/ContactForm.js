import React, { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <Container>
      <FormBox>
        <p>Contact Form</p>
        <InputGroup>
          <input
            className="name-input"
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={name => setName(name.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <input
            className="phone-input"
            type="text"
            name="email"
            value={phone}
            placeholder="Phone"
            onChange={phone => setPhone(phone.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <input
            type="text"
            name="subject"
            value={subject}
            placeholder="Subject"
            onChange={subject => setSubject(subject.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <textarea
            className="message-input"
            name="message"
            value={message}
            placeholder="Message"
            onChange={message => setMessage(message.target.value)}
          />
        </InputGroup>
        <button>Submit</button>
      </FormBox>
    </Container>
  );
};

export default ContactForm;

const Container = styled.div`
  width: 100vw;
  height: 120vh;
  background-color: #151515;
  padding: 10vh 0;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    height: 100vh;
    padding: 0vh 0;
  `}
  ${media.between("small", "medium")`
    /* screen width is between 450px and 768px (small to medium) */
    height: 80vh;
    padding: 0vh 0;
  `}
`;

const FormBox = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 15px;
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
    /* box-shadow: 6px 4px 16px -2px rgba(134, 143, 179, 1); */
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

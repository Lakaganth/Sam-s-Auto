import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import media from "styled-media-query";
import firebase from "../fbconfig";
import TestimonialForm from "../components/testimonials/TestimonialForm";

const login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleLogin = async () => {
    console.log(email, password);
    const authetication = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    setUser(authetication);
    console.log(authetication);
  };
  return (
    <div>
      <Head>
        <title>Sam's Auto | Login</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins|Quicksand|Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        >
      </Head>
      <Container>
        {!user ? (
          <>
            <h3>Login</h3>
            <FormBox>
              <InputGroup>
                <input
                  className="email-input"
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(email) => setemail(email.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <input
                  className="password-input"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(password) => setPassword(password.target.value)}
                />
              </InputGroup>
              <button onClick={handleLogin}>Submit</button>
            </FormBox>
          </>
        ) : (
          <TestimonialForm />
        )}
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

export default login;

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

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Rei from "../assets/rei.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Rei} alt="" />
      <br />
      <h1>
        Bienvenido, <span>{userName}!</span>
      </h1>
      <h3>Seleccione un chat para conversar.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
 // background-color:#23042e;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #8622ab
  }
`;

import React from "react";
import styled, { keyframes } from "styled-components";
import { DefaultText, BigText } from "../../constants/styledComponents";

const ShrinkLoading = keyframes`
    0% {
        height:100vh;
    }

    100% {
        height:0px;
    }
`;

const Container = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
  height: 220px;
  align-items: center;
  background-color: black;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 125vh;
  position: relative;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// const Container = styled.div`
//     background-color:black;
//     width:100%;
//     height:100vh;
//     color:white;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
//     color:white;
//     animation: ${ShrinkLoading} 2s ease-in;
// `;

class Loading extends React.Component {
  render() {
    return (
      <Background>
        <Container>
          <DefaultText>SHIN DONGGYU</DefaultText>
          <DefaultText white>FIRST PORTFOLIO IN A LIFE OF A</DefaultText>
          <div
            style={{
              position: "relative"
            }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://blog.naver.com/donggyu_00"
            >
              <DefaultText hover>RONTEND@BLOG</DefaultText>
            </a>
          </div>
        </Container>
        <Column
          style={{
            position: "relative",
            top: 93,
            marginTop: -50
          }}
        >
          <BigText white>LAZY</BigText>
          <BigText white>DEVELOPER</BigText>
        </Column>
      </Background>
    );
  }
}

export default Loading;

import React from "react";
import styled, { keyframes } from "styled-components";

const HeartBeat = keyframes`
    0%{
        font-size:15px;
    } 
    50% {
        font-size:20px;
    }
    100% {
        font-size:15px;
    }
`;

const Container = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
  animation: ${HeartBeat};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  user-select: none;
`;

class Heart extends React.Component {
  render() {
    return <Container>❤</Container>;
  }
}

export default Heart;

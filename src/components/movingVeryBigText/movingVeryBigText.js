import React from "react";
import styled from "styled-components";
import { VeryBigText } from "../../constants/styledComponents";
import { Parallax } from "react-scroll-parallax";

const Container = styled.div`
  width: 100%;
  display: flex;
  white-space: nowrap;
  margin-top: 400px;
  padding-bottom: 300px;
  overflow-x: hidden;
`;

class MovingVeryBigText extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <Container>
        <Parallax x={[5, -30]} tagOuter="figure">
          <VeryBigText>{text}</VeryBigText>
        </Parallax>
      </Container>
    );
  }
}

export default MovingVeryBigText;

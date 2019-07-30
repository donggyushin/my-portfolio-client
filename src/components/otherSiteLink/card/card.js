import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import { Parallax as Parallax2 } from "react-scroll-parallax";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.div`
  font-size: 150px;
  font-weight: 900;
  color: black;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TextContainer = styled.div`
  width: 700px;
  height: 775px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WhiteText = styled.div`
  font-size: 152px;
  font-weight: 900;
  color: white;
`;

class Card extends React.Component {
  render() {
    const { to, texts, number, image } = this.props;
    return (
      <Container>
        {/* <Parallax2 y={[20, -20]} tagOuter="div">
          
        </Parallax2> */}
        <Parallax2 y={[20, -20]} tagOuter="div">
          <Number>{number}</Number>
          <Parallax
            bgImage={require(`../../../assets/${image}`)}
            bgImageAlt="the cat"
            strength={300}
          >
            <a href={to} target="blank">
              <TextContainer>
                {texts.map(text => (
                  <WhiteText>{text}</WhiteText>
                ))}
              </TextContainer>
            </a>
          </Parallax>
        </Parallax2>
      </Container>
    );
  }
}

export default Card;

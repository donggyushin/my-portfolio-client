import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 115vh;
  background-color: black;
  position: relative;
  overflow: hidden;
  justify-content: center;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
  width: 150%;
  z-index: 2;
  opacity: ${props => (props.hover ? 1 : 0)};
`;

const WhiteText = styled.div`
  color: white;
  font-size: 130.259px;
  user-select: none;
  z-index: 3;
  ${props =>
    props.unserline &&
    `
  border-bottom: white solid 4px;
  `}
  ${props => props.cursor && `cursor: pointer;`};
  opacity: ${props => (props.grey ? 0.6 : 1)};
  transition-duration: 0.5s;
`;

const Row = styled.div`
  display: flex;
`;

const MarginRight = styled.div`
  width: 70px;
`;

const ImageContainer = styled.div`
  width: 500px;
`;

const Image = styled.img`
  width: 100%;
  z-index: 1;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

class ChangingImageBox extends React.Component {
  state = {
    greyText: false,
    hover: false
  };
  render() {
    const { greyText, hover } = this.state;
    const { onCursorOnInstagramText, outCursorOnInstagramText } = this;
    return (
      <Container>
        <TextContainer>
          <WhiteText grey={greyText}>Even more</WhiteText>
          <Row>
            <WhiteText grey={greyText}>on</WhiteText>
            <MarginRight />

            <WhiteText
              onMouseOut={outCursorOnInstagramText}
              onMouseOver={onCursorOnInstagramText}
              cursor
              unserline
            >
              <a
                href="https://www.instagram.com/donggyu_00"
                target="blank"
                style={{
                  color: "white"
                }}
              >
                Instagram
              </a>
            </WhiteText>
          </Row>
        </TextContainer>
        <Parallax y={[-20, 20]} tagOuter="div">
          <ImageContainer
            style={{
              marginRight: 120
            }}
          >
            <Image src={require("../../assets/instagram1.jpg")} />
          </ImageContainer>
        </Parallax>
        <Column>
          <Parallax y={[20, -20]} tagOuter="div">
            <ImageContainer>
              <Image
                style={{
                  position: "relative",
                  top: 6
                }}
                src={require("../../assets/instagram2.jpg")}
              />
            </ImageContainer>
          </Parallax>
        </Column>
        <TextContainer>
          <Video autoPlay playsinline muted loop hover={hover}>
            <source src={require("../../assets/instagram3.mp4")} />
          </Video>
        </TextContainer>
      </Container>
    );
  }

  onCursorOnInstagramText = () => {
    console.log("mouse on");
    this.setState({
      greyText: true,
      hover: true
    });
  };

  outCursorOnInstagramText = () => {
    this.setState({
      greyText: false,
      hover: false
    });
  };
}

export default ChangingImageBox;

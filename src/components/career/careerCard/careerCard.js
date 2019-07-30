import React from "react";
import styled from "styled-components";
import { NormalText, SmallText } from "../../../constants/styledComponents";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;

  ${props =>
    props.pointer &&
    `
    cursor: pointer;
    `}
`;

const Number = styled.div`
  font-family: "Open Sans", sans-serif;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 114.074px;
  line-height: 131.04px;
  user-select: none;
  width: 100%;
  ${props =>
    props.grey === true &&
    `
        color:gainsboro;
    `}
  transition-duration:0.3s;
`;

class CareerCard extends React.Component {
  interval = null;

  render() {
    const { title, text, changeableText, grey } = this.props;

    return (
      <Container
        pointer={changeableText !== undefined ? true : false}
        onMouseOver={() => {
          console.log(changeableText);
          if (changeableText !== undefined) {
            this.changeTextInfinitely(
              [`@youtube`, `@naver.blog`, `@instagram`],
              changeableText
            );
          }
        }}
        onMouseOut={() => {
          if (changeableText !== undefined) {
            this.stopChangeText("Social Network", changeableText);
          }
        }}
      >
        <Number
          grey={changeableText === undefined && grey === true ? true : false}
        >
          {title}
        </Number>
        <SmallText
          id={changeableText !== null && changeableText}
          grey={changeableText === undefined && grey ? true : false}
        >
          {text}
        </SmallText>
      </Container>
    );
  }

  changeTextInfinitely = (textArray, changeableText) => {
    const { turnGreyOn } = this.props;
    turnGreyOn();
    const arrayLength = textArray.length;
    let i = 0;
    this.interval = setInterval(() => {
      document.getElementById(changeableText).innerHTML =
        textArray[i % arrayLength];
      i = i + 1;
    }, 500);
  };

  stopChangeText = (firstText, id) => {
    const { turnGreyDown } = this.props;
    turnGreyDown();
    clearInterval(this.interval);
    document.getElementById(id).innerHTML = id;
  };
}

// const CareerCard = ({ title, text }) => (
//     <Container>
//         <NormalText>
//             {title}
//         </NormalText>
//         <SmallText>
//             {text}
//         </SmallText>
//     </Container>
// )

export default CareerCard;

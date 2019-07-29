import React from "react";
import styled from "styled-components";
import Card from "./card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  background-color: black;
  color: white;
  overflow-y: hidden;
  padding-bottom: 200px;
`;

const Row = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Chapter2Title = styled.div`
  font-size: 87.8519px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  font-family: "Noto Sans TC", sans-serif;
  color: white;
  line-height: 105.422px;
  user-select: none;
`;

class Experiences extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1.2,
      slidesToScroll: 1
    };
    return (
      <Container>
        <Row
          style={{
            justifyContent: "center",
            marginBottom: 50
          }}
        >
          <Column
            style={{
              width: 1224
            }}
          >
            <Chapter2Title>A short summary</Chapter2Title>
            <Chapter2Title>of my skills</Chapter2Title>
          </Column>
        </Row>

        <Slider arrows={false} {...settings}>
          <Card
            name={"React"}
            title={"A JavaScript library"}
            desc={
              "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
            }
          />
          <Card
            name={"React"}
            title={"A JavaScript library"}
            desc={
              "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
            }
          />
          <Card
            name={"React"}
            title={"A JavaScript library"}
            desc={
              "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
            }
          />
          <Card
            name={"React"}
            title={"A JavaScript library"}
            desc={
              "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
            }
          />
          <Card
            name={"React"}
            title={"A JavaScript library"}
            desc={
              "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
            }
          />
        </Slider>
      </Container>
    );
  }
}

export default Experiences;

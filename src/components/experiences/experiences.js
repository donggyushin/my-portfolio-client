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
  line-height: 1.5;
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
            name={"RDB"}
            title={"Relational database"}
            desc={
              "A relational database is a set of formally described tables from which data can be accessed or reassembled in many different ways without having to reorganize the database tables. "
            }
          />
          <Card
            name={"Express"}
            title={"Web application framework"}
            desc={
              "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
            }
          />
          <Card
            name={"Java"}
            title={"Programing language"}
            desc={
              "Java is a programming language that produces software for multiple platforms. When a programmer writes a Java application, the compiled code (known as bytecode) runs on most operating systems (OS)"
            }
          />
          <Card
            name={"Python"}
            title={"Programing language"}
            desc={
              "Python is an interpreted, high-level, general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."
            }
          />
          <Card
            name={"Swift"}
            title={"Programing language"}
            desc={
              "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, macOS, watchOS, tvOS, Linux, and z/OS. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products."
            }
          />
          <Card
            name={"React Native"}
            title={"JavaScript framework"}
            desc={
              "It’s based on React, Facebook’s JavaScript library for building user interfaces, but instead of targeting the browser, it targets mobile platforms. "
            }
          />
          <Card
            name={"Node.js"}
            title={"Javascript outside of browser"}
            desc={
              "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser."
            }
          />
        </Slider>
      </Container>
    );
  }
}

export default Experiences;

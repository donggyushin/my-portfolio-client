import React from "react";
import styled from "styled-components";
import Card from "./card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 400px;
`;

class OtherSiteSlick extends React.Component {
  render() {
    return (
      <Container>
        <Card
          to="https://blog.naver.com/donggyu_00"
          image="naver.jpg"
          number={"01"}
          texts={["NAVER", "BLOG"]}
        />
        <Card
          to={
            "https://www.youtube.com/channel/UCEu31Np3_ocJ0JEtuoSbXIA?view_as=subscriber"
          }
          image="youtube.jpeg"
          number={"02"}
          texts={["YOUTUBE"]}
        />
        <Card
          to={"https://github.com/donggyushin"}
          image="github.jpeg"
          number={"03"}
          texts={["GITHUB"]}
        />
      </Container>
    );
  }
}

export default OtherSiteSlick;

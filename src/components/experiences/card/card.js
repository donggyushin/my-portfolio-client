import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1052px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  left: 344px;
  cursor: pointer;
`;

const Name = styled.div`
  font-size: 22.4px;
  font-weight: 100;
  user-select: none;
  max-width: 600px;
  margin-bottom: 80px;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: 100;
  user-select: none;
  max-width: 600px;
  margin-bottom: 30px;
`;

const Desc = styled.div`
  font-size: 22.4px;
  font-weight: 100;
  line-height: 44.8px;
  opacity: 0.6;
  max-width: 600px;
`;

class Card extends React.Component {
  render() {
    const { name, title, desc } = this.props;
    return (
      <Container>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Container>
    );
  }
}

export default Card;

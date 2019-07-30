import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1052px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  /* left: 344px; */
  left: 30%;
  cursor: pointer;
`;

const Name = styled.div`
  font-size: 22.4px;
  font-weight: 100;
  user-select: none;
  max-width: 600px;
  margin-bottom: 80px;
  opacity: ${props => (props.white ? 1 : 0.6)};
  transition-duration: 0.4s;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: 100;
  user-select: none;
  max-width: 600px;
  margin-bottom: 30px;
  opacity: ${props => (props.white ? 1 : 0.6)};
  transition-duration: 0.4s;
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
    const { name, title, desc, page, currentPage } = this.props;
    return (
      <Container>
        <Name white={page === currentPage}>{name}</Name>
        <Title white={page === currentPage}>{title}</Title>
        <Desc>{desc}</Desc>
      </Container>
    );
  }
}

export default Card;

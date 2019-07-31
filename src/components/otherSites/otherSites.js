import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 35.4815px;
  font-weight: 400;
  line-height: 42.5778px;
  user-select: none;
  text-align: left;
`;

const Desc = styled.div`
  font-size: 22.4px;
  font-weight: 400;
  line-height: 62.72px;
  max-width: 582.4px;
  opacity: 0.6;
  text-align: left;
  user-select: none;
  margin-bottom: 50px;
`;

class OtherSites extends React.Component {
  render() {
    const { title, descs } = this.props;
    return (
      <Container>
        <Column>
          <Title>{title}</Title>
        </Column>
        <Column>
          {descs.map(desc => (
            <Desc>{desc}</Desc>
          ))}
        </Column>
      </Container>
    );
  }
}

export default OtherSites;

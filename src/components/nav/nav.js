import React from "react";
import styled from "styled-components";
import { DefaultText } from "../../constants/styledComponents";

const Container = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
  height: 220px;
  align-items: center;
`;

class Nav extends React.Component {
  render() {
    return (
      <Container>
        <DefaultText>SHIN DONGGYU</DefaultText>
        <DefaultText>FIRST PORTFOLIO IN A LIFE OF A</DefaultText>
        <div
          style={{
            position: "relative"
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=donggyu_00@naver.com&tf=1`}
          >
            <DefaultText hover>RONTEND@BLOG</DefaultText>
          </a>
        </div>
      </Container>
    );
  }
}

export default Nav;

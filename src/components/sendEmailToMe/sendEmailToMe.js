import React from "react";
import styled from "styled-components";
import { DefaultText } from "../../constants/styledComponents";

const Container = styled.div`
  position: relative;
`;

class SendEmailToMe extends React.Component {
  render() {
    return (
      <Container>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=donggyu9410@gmail.com&tf=1`}
        >
          <DefaultText hover>CONTACT ME</DefaultText>
        </a>
      </Container>
    );
  }
}

export default SendEmailToMe;

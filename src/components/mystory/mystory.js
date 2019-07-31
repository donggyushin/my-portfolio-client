import React from "react";
import styled from "styled-components";
import {
  SmallText,
  SmallTextHoverEffect,
  Row
} from "../../constants/styledComponents";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 582px;
  word-wrap: break-word;
  position: relative;
  left: 100px;
`;

class MyStory extends React.Component {
  render() {
    return (
      <Container>
        <SmallText>
          Let'me introduce myself, I was born in 1994 in Jeon-Ju. I entered
          &nbsp;
          <span
            style={{
              position: "relative"
            }}
          >
            <a href="http://www.bible.ac.kr/" target="blank">
              <SmallTextHoverEffect>
                Korea Bible University
              </SmallTextHoverEffect>
            </a>
          </span>
          &nbsp; in 2013. I can say that time is the beginning of my developer
          life. But that's not the time when i started coding. Frankly say, I
          started to coding very long time after entering university. I was not
          interested in coding ever. At that time, i was running on online
          shopping mall that sells women clothes from 2013 to 2017. The ricobom
          that i worked at. There is nothing with me now because we selled the
          mall to other people.
        </SmallText>
        <div
          style={{
            height: 100
          }}
        />
        <SmallText>
          I came back university lately(2018), then I started coding from that
          time. Still it is difficult and boring for me, But I was rapidly fall
          in love with web and mobile developing not like my expectation.
        </SmallText>
        <div
          style={{
            height: 100
          }}
        />
        <SmallText>
          Especially, I was totally interested in making user interface and user
          experience, now I'm trying working on that.
        </SmallText>
      </Container>
    );
  }
}

export default MyStory;

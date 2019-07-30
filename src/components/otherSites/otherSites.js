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
    return (
      <Container>
        <Column>
          <Title>Other sites</Title>
        </Column>
        <Column>
          <Desc>
            I have some other sites too. Luckily I started naver blog from my
            beginning of online shopping mall. So I can easily started naver
            blog with my beginning of learning programing. It worked well for me
            as a one of my portfolio site, so I can easily get my first
            outsouring project.
          </Desc>
          <Desc>
            I like watching videos on youtube for fun. Someday I thought that
            how about open my personal youtube channel? Then I can upload my
            projects in video, it will be awesome! So I opened my personal
            youtube channel also.
          </Desc>
          <Desc>
            Last, I have my own github of course, like every other programer
            does. You can see how I love coding in my free time! There are a lot
            of repositories. It will be my pleasure when you follow my git
            account. Let's share our experiences, and if it possible, let's
            start our awesome project together!
          </Desc>
        </Column>
      </Container>
    );
  }
}

export default OtherSites;

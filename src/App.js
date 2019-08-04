import React from "react";
import styled from "styled-components";
import Nav from "./components/nav";
import Loading from "./components/loading";
import Header from "./components/header";
import { ParallaxProvider } from "react-scroll-parallax";
import Section from "./components/section";
import MovingVeryBigText from "./components/movingVeryBigText";
import MyStory from "./components/mystory";
import Career from "./components/career";
import Experiences from "./components/experiences";
import OtherSites from "./components/otherSites";
import OtherSiteLink from "./components/otherSiteLink";
import ChangingImageBox from "./components/changingImageBox";
import Heart from "./components/heart";
import SendEmailToMe from "./components/sendEmailToMe";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1300px;
`;

const MarginBottom = styled.div`
  height: 200px;
`;

class AppContainer extends React.Component {
  state = {
    scrollTop: 0,
    loading: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    setTimeout(() => {
      this.finishLoading();
    }, 5000);
  }

  render() {
    const { loading } = this.state;
    return <App loading={loading} />;
  }

  onScroll = e => {
    const { scrollTop } = this.state;
    const nextScrollTop = e.srcElement.scrollingElement.scrollTop;
  };

  finishLoading = () => {
    this.setState({
      loading: false
    });
  };
}

function App({ loading }) {
  return (
    <ParallaxProvider>
      <Container id="my-scrollbar">
        {loading && <Loading />}
        {!loading && (
          <>
            <Nav />
            <Header />
            <Section />
            <MovingVeryBigText text={"TELL ME MORE"} />
            <MyStory />
            <Career />
            <Experiences />
            <MovingVeryBigText text={"Other sites?"} />
            <OtherSites
              title={"Other sites"}
              descs={[
                `I have some other sites too. Luckily I started naver blog from my
            beginning of online shopping mall. So I can easily started naver
            blog with my beginning of learning programing. It worked well for me
            as a one of my portfolio site, so I can easily get my first
            outsouring project.`,
                `I like watching videos on youtube for fun. Someday I thought that
            how about open my personal youtube channel? Then I can upload my
            projects in video, it will be awesome! So I opened my personal
            youtube channel also.`,
                `Last, I have my own github of course, like every other programer
            does. You can see how I love coding in my free time! There are a lot
            of repositories. It will be my pleasure when you follow my git
            account. Let's share our experiences, and if it possible, let's
            start our awesome project together!`
              ]}
            />
            <OtherSiteLink />
            <ChangingImageBox />
            <div
              style={{
                marginTop: 300
              }}
            >
              <OtherSites
                title={"Comming soon"}
                descs={[
                  `It's not the end of my story, I will experience many cases from now on, and those experiences will be shown here. I will be back with variety of experiences and projects that surprises you. `,
                  `So please wait for me. `
                ]}
              />
            </div>

            <Heart />
            <SendEmailToMe />
            <MarginBottom />
          </>
        )}
      </Container>
    </ParallaxProvider>
  );
}

export default AppContainer;

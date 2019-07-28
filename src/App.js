import React from 'react';
import styled from 'styled-components';
import Nav from './components/nav'
import Loading from './components/loading'
import Header from './components/header'
import { ParallaxProvider } from 'react-scroll-parallax';
import Section from './components/section'
import MovingVeryBigText from './components/movingVeryBigText'
import MyStory from './components/mystory'


const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  min-width:1300px;
`;

class AppContainer extends React.Component {

  state = {
    scrollTop: 0,
    loading: true
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    setTimeout(() => {
      this.finishLoading();
    }, 2000);


  }


  render() {
    const { loading } = this.state;
    return <App loading={loading} />
  }


  onScroll = e => {
    const { scrollTop } = this.state;
    const nextScrollTop = e.srcElement.scrollingElement.scrollTop;

  }

  finishLoading = () => {
    this.setState({
      loading: false
    })
  }


}

function App({ loading }) {
  return (
    <ParallaxProvider>


      <Container id="my-scrollbar">
        {loading && <Loading></Loading>}
        {!loading && <>
          <Nav />
          <Header />
          <Section />
          <MovingVeryBigText text={'TELL ME MORE'} />
          <MyStory />
        </>}

      </Container>

    </ParallaxProvider>



  );
}


export default AppContainer;

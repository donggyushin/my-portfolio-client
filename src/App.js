import React from 'react';
import styled from 'styled-components';
import Nav from './components/nav'
import Loading from './components/loading'
import Header from './components/header'
import Scrollbar from 'react-smooth-scrollbar';
import { ParallaxProvider } from 'react-scroll-parallax';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  min-width:1300px;
  padding-bottom:300px;
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
      <Scrollbar
      >
        <Container id="my-scrollbar">
          {loading && <Loading></Loading>}
          {!loading && <>
            <Nav />
            <Header />
          </>}

        </Container>
      </Scrollbar>
    </ParallaxProvider>



  );
}


export default AppContainer;

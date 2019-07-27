import React from 'react';
import Navigation from './components/navigation'
import styled from 'styled-components';
import Copyright from "./components/copyright"

const Container = styled.div`
  padding-top:80px;
  min-height: 150vh;
  width:100%;
  position: relative;
`;

class AppContainer extends React.Component {

  state = {
    scrollTop: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }


  render() {
    const { scrollTop } = this.state;
    return <App scrollTop={scrollTop} />
  }


  onScroll = e => {
    this.setState({
      scrollTop: e.srcElement.scrollingElement.scrollTop
    })
  }


}

function App({ scrollTop }) {
  return (
    <Container>
      <Navigation scrollTop={scrollTop} />
      My Portfolio

        <Copyright />

    </Container>
  );
}

export default AppContainer;

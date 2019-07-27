import React from 'react';
import styled from 'styled-components';
import { BigText, Image } from '../../constants/styledComponents'
import { Parallax } from 'react-parallax'
// import { Parallax } from 'react-scroll-parallax';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`;

const ImageContainer = styled.div`
    width:80%;
`

class Header extends React.Component {
    render() {
        return <Container>

            {/* <BigText >LAZY</BigText>
            <BigText>DEVELOPER</BigText>

            <Parallax y={[-20, 0]} tagOuter="div">
                <Container>
                    <ImageContainer>
                        <Image src={require('../../assets/digital-nomad.jpg')} />
                    </ImageContainer>
                </Container>
            </Parallax> */}
            <Container style={{
                position: 'relative',
                top: 100,
                marginTop: -50
            }}>
                <BigText >LAZY</BigText>
                <BigText>DEVELOPER</BigText>
            </Container>

            <Parallax
                bgImage={require('../../assets/digital-nomad.jpg')}
                bgImageAlt="the cat"
                strength={300}
            >
                <div style={{
                    width: 1200,
                    height: 700
                }} />
            </Parallax>

        </Container>
    }
}

export default Header
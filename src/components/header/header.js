import React from 'react';
import styled from 'styled-components';
import { BigText, Image } from '../../constants/styledComponents'
import { Parallax, Background } from 'react-parallax'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:100px;
`;

const ImageContainer = styled.div`
    width:65%;
`

class Header extends React.Component {
    render() {
        return <Container>

            <Parallax
                bgImage={require('../../assets/digital-nomad.jpg')}
                bgImageAlt="digital nomad"
                strength={300}
            >

                <Container>
                    <BigText white>LAZY</BigText>
                    <BigText white>DEVELOPER</BigText>
                </Container>

                <div style={{ height: '200px' }} />
            </Parallax>

        </Container>
    }
}

export default Header
import React from 'react';
import styled from 'styled-components';
import { VeryBigText } from '../../constants/styledComponents'
import { Parallax } from 'react-scroll-parallax';

const Container = styled.div`
    width:100%;
    display:flex;
    white-space:nowrap;
    margin-top:400px;
    padding-bottom:300px;
`;

class MovingVeryBigText extends React.Component {
    render() {
        const { text } = this.props;
        return <Container>
            <Parallax className="custom-class" x={[10, -10]} tagOuter="div">
                <VeryBigText>{text}</VeryBigText>
            </Parallax>

        </Container>
    }
}

export default MovingVeryBigText
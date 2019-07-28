import React from 'react';
import styled from 'styled-components';
import { NormalText } from '../../constants/styledComponents'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:1108px;
    margin-top:430px;
    word-wrap:break-word;
    
`;

class Section extends React.Component {
    render() {
        return <Container>
            <NormalText>안녕, 나는 신동규라고 해. 자칭 게으른 개발자지만 코딩하는걸 굉장히 좋아하지. </NormalText>
            <NormalText>멋지고 이쁜 유저 인터페이스를 개발할 수 있는 개발자가 되는게 목표야.</NormalText>
        </Container>
    }
}

export default Section
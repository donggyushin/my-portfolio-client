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
            <NormalText>
                Hi, I'm shin donggyu. I call myself a lazy developer. But I love coding for fun. Ironic, isn't it?
                </NormalText>
            <NormalText>
                My goal is to be a good developer that makes awesome and pretty UI/UX

                </NormalText>
        </Container>
    }
}

export default Section
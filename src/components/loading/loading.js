import React from 'react';
import styled, { keyframes } from 'styled-components';
import { DefaultText, BigText } from '../../constants/styledComponents';



const ShrinkLoading = keyframes`
    0% {
        height:100vh;
    }

    100% {
        height:0px;
    }
`

const Container = styled.div`
    background-color:black;
    width:100%;
    height:100vh;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
    animation: ${ShrinkLoading} 2s ease-in;
`;

class Loading extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <DefaultText white>Rontend's</DefaultText>
                </div>
                <BigText white>Portfolio</BigText>
            </Container>
        )
    }
}

export default Loading
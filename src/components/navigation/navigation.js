import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import { Text } from "../../constants/styledComponents"

const ContainerTop = styled.div`
    display:flex;
    background-color:${props => props.scrollTop === 0 ? Colors.deepDarkBlue : Colors.lightGrey};
    color:${props => props.scrollTop === 0 ? Colors.lightGrey : Colors.deepDarkBlue};
    width:100%;
    padding:15px;
    position:fixed;
    top:0;
    left:0;
    transition-duration:0.5s;
    align-items:center;
`;

class Navigation extends React.Component {
    render() {
        const { scrollTop } = this.props;
        return (
            <ContainerTop scrollTop={scrollTop}>
                <img style={{
                    width: 47,
                    marginLeft: 20
                }} src={require('../../assets/monitor.png')} />
                <Text style={{
                    marginLeft: 23
                }}>My Portfolio</Text>
            </ContainerTop>
        )
    }
}

export default Navigation
import React from 'react';
import styled from "styled-components";
import Colors from '../../constants/colors';
import { SmallText } from "../../constants/styledComponents"

const Container = styled.div`
    width:100%;
    height:100px;
    background-color:${Colors.lightGrey};
    color:${Colors.deepDarkBlue};
    position:absolute;
    bottom:0;
    left:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:50px;
`;

class CopyRight extends React.Component {
    render() {
        return (
            <Container>
                <SmallText>
                    © 2019- shin donggyu All Rights Reserved
</SmallText>

            </Container>
        )
    }
}

export default CopyRight
import React from 'react';
import styled from 'styled-components';
import CareerCard from './careerCard'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:1008px;
    margin-top:300px;
    padding-bottom:300px;
`;

const Row = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
`;

class Career extends React.Component {
    state = {
        grey: false
    }
    render() {
        const { grey } = this.state;
        const { turnGreyDown, turnGreyOn } = this;
        return <Container>
            <Row>
                <CareerCard grey={grey} title={'0'} text={'Awards won'} />
                <CareerCard grey={grey} title={'4'} text={'Outsourcing'} />
                <CareerCard grey={grey} title={'0'} text={'Degrees'} />
            </Row>
            <Row style={{
                marginTop: 150,

            }}>
                <CareerCard title={'3'}
                    turnGreyDown={turnGreyDown}
                    turnGreyOn={turnGreyOn}
                    changeableText={'Social Network'} text={'Social Network'} />
                <CareerCard grey={grey} title={'0'} text={'Interships done'} />
                <CareerCard grey={grey} title={'24'} text={'Years lived'} />
            </Row>

        </Container>
    }

    turnGreyOn = () => {
        this.setState({
            grey: true
        })
    }

    turnGreyDown = () => {
        this.setState({
            grey: false
        })
    }
}

export default Career
import React from 'react';
import styled from 'styled-components';
import { NormalText, SmallText } from '../../../constants/styledComponents'


const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:160px;
    
    ${props => props.pointer && `
    cursor: pointer;
    `}
`;


class CareerCard extends React.Component {

    interval = null;

    render() {
        const { title, text, changeableText, grey } = this.props;

        return (
            <Container

                pointer={changeableText !== undefined ? true : false}
                onMouseOver={() => {
                    console.log(changeableText)
                    if (changeableText !== undefined) {

                        this.changeTextInfinitely([`@youtube`, `@naver.blog`, `@instagram`], changeableText)
                    }

                }}
                onMouseOut={() => {

                    if (changeableText !== undefined) {
                        this.stopChangeText('Social Network', changeableText)
                    }
                }
                }


            >
                <NormalText
                    grey={(changeableText === undefined && grey === true) ? true : false}
                >
                    {title}
                </NormalText>
                <SmallText
                    id={changeableText !== null && changeableText}
                    grey={(changeableText === undefined && grey) ? true : false}

                >

                    {text}
                </SmallText>

            </Container>
        )
    }

    changeTextInfinitely = (textArray, changeableText) => {
        const {
            turnGreyOn } = this.props;
        turnGreyOn()
        const arrayLength = textArray.length;
        let i = 0;
        this.interval = setInterval(() => {
            document.getElementById(changeableText).innerHTML = textArray[i % arrayLength];
            i = i + 1;
        }, 500);

    }

    stopChangeText = (firstText, id) => {
        const { turnGreyDown } = this.props;
        turnGreyDown();
        clearInterval(this.interval);
        document.getElementById(id).innerHTML = id

    }


}


// const CareerCard = ({ title, text }) => (
//     <Container>
//         <NormalText>
//             {title}
//         </NormalText>
//         <SmallText>
//             {text}
//         </SmallText>
//     </Container>
// )

export default CareerCard
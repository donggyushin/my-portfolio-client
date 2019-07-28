import React from 'react';
import styled from 'styled-components';
import { SmallText, SmallTextHoverEffect, Row } from '../../constants/styledComponents'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:582px;
    word-wrap:break-word;
    position: relative;
    left:100px;
`;


class MyStory extends React.Component {
    render() {
        return <Container>


            <SmallText >내 이야기를 조금 더 해볼께. 나는 1994년에 전주에서 태어났어. 그리고 2013년에는 지금 내가 다니고 있는
        &nbsp;
        <span style={{
                    position: "relative"
                }}>
                    <a href="http://www.bible.ac.kr/" target="blank">
                        <SmallTextHoverEffect>
                            한국성서대학교
            </SmallTextHoverEffect>
                    </a>
                </span>
                에 입학했어.
                       내 개발자 인생의 시작점이라고도 볼 수 있지. 하지만 내가 코딩에 관심을 가지기 시작한 건 조금 더 먼 훗날의 이야기야. 처음에는 코딩이라는 것에 전혀
                       1도 관심이 없었어. 그래서 그 당시에는 나의 누나와 함께 인터넷 쇼핑몰을 운영하기 시작했었어. 2013년부터 2017년까지. 지금은 다른 사람들에게 양도
                       했기 때문에 나와는 전혀 상관 없는 쇼핑몰이야.
                 </SmallText>
            <div style={{
                height: 100
            }} />
            <SmallText >
                그렇게 2018년에 늦은 나이로 다시 학교에 복학하게 되었고, 그때부터 프로그래밍을 공부를 시작했어. 여전히 프로그래밍은 나에게 어렵고 재미없었지만,
                예상외로 웹 어플리케이션 개발과 모바일 어플리케이션 개발을 시작하고 난 이후부터 나는 코딩에 재미를 붙이기 시작했어.
            </SmallText>
            <div style={{
                height: 100
            }} />
            <SmallText>
                그 중에서도 유저들과 직접 맞닿아서 작업을 할 수 있는 user interface 를 개발하는 작업이 나에게 잘 맞는다는 것을 깨닫게 되었고, 지금은
                훌륭한 ui/ux 디자이너가 되기 위해서 열심히 공부중이야.
            </SmallText>

        </Container>
    }
}

export default MyStory;
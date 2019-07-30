import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
`;

export const Image = styled.img`
  animation: ${FadeIn} 1s ease-in;
  width: 100%;
`;

export const NormalText = styled.div`
  font-family: "Open Sans", sans-serif;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 84.8px;
  line-height: 131.04px;
  user-select: none;
  width: 100%;
  ${props =>
    props.grey === true &&
    `
        color:gainsboro;
    `}
  transition-duration:0.3s;
`;

export const BigText = styled.div`
    font-size:238.519px;
    font-weight:400;
    line-height:210.37px;
    color:${props => (props.white ? "white" : "black")};
    /* animation:${FadeIn} 1s ease-in; */
    z-index:3;
    user-select:none;
`;

export const DefaultText = styled.div`
z-index:3;
    font-size:21.6296px;
    letter-spacing:0.4px;
    user-select:none;
    flex-grow:1;
    flex-shrink:1;
    /* animation:${FadeIn} 1s ease-in; */
    color:${props => (props.white ? "white" : "black")};
    cursor: ${props => props.hover && "pointer"};
    ${props =>
      props.hover &&
      `&:hover::after {
        width: 100%;
        left: 0;
    }`}

    ${props =>
      props.hover &&
      `
    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        display: block;
        margin-top: 5px;
        right: 0;
        background: black;
        transition: width .4s ease;
        -webkit-transition: width .4s ease;
    }
    `}
    
    
`;

export const Row = styled.div`
  display: flex;
`;

export const SmallTextHoverEffect = styled.span`
  font-size: 22px;
  font-family: "Open Sans", sans-serif;
  font-family: "Noto Sans TC", sans-serif;
  font-weight: 400;
  line-height: 62.74px;
  width: 100%;
  user-select: none;
  color: black;
  &:hover::after {
    width: 100%;
    left: 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: -8px;
    right: 0;
    background: black;
    transition: width 0.4s ease;
    -webkit-transition: width 0.4s ease;
  }
`;

export const SmallText = styled.div`
    font-size:22px;
    font-family: "Open Sans", sans-serif;
  font-family: "Noto Sans TC", sans-serif;
    font-weight:400;
    line-height:62.74px;
    width:100%;
    user-select:none;
    ${props =>
      props.hover &&
      `&:hover::after {
        width: 100%;
        left: 0;
    }`}

    ${props =>
      props.hover &&
      `
    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        display: block;
        margin-top: 5px;
        right: 0;
        background: black;
        transition: width .4s ease;
        -webkit-transition: width .4s ease;
    }
    `}
    ${props =>
      props.grey === true &&
      `
        color:gainsboro;
    `}

    transition-duration:0.3s;

`;
export const VeryBigText = styled.div`
  font-size: 322.963px;
  font-weight: 400;
  line-height: 419.852px;
  user-select: none;
`;

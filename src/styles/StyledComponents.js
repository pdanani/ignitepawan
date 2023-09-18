import styled from 'styled-components';
// import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  /* background-color: #030404; */
  background: linear-gradient(180deg, #030404 0%, rgba(3, 4, 4, 0.81) 74.48%, rgba(3, 4, 4, 0.00) 100%), url(/background1.jpg), lightgray 50% / cover no-repeat;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 1;  // Add this line to set a high z-index value
  position: relative;  // Add this line to establish a stacking context
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  z-index:1;
  contrast:2;
  mix-blend-mode: lighten;
  box-shadow: boxShadow: 0px 4px 30px rgba(3, 4, 4, 0.7);
  img {
    width: auto;
    max-width: 100%;
    height: auto;
    margin-bottom: ${(props) => (props.nobottom ? '0px' : '10px')};

  }
  @keyframes twinkling {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  .twinkle {
    animation: twinkling 1.5s forwards;
    animation-iteration-count: 1;
    mix-blend-mode: lighten;
  }

`;

export const Title = styled.div`
  background: linear-gradient(to bottom left, #942626, #fff);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  max-width: 80%;
  text-align: center;
  font-size: xx-large;
  font-weight: 700;
  padding: 2%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.51);;
`;

export const BigTitle = styled.div`
  background: linear-gradient(to bottom left, #942626, #fff);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.51);
  max-width: 80%;
  text-align: center;
  font-size: xx-large;
  font-weight: 700;
  padding: 2%;
`;

export const CountdownContainer = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 100%;
  max-width: 450px;
  z-index:1;
  height: 150px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-color:#fff;
  @media (min-width: 600px) {
    width: 450px;
  }
`;

export const CountdownText = styled.span`
  font-family: 'Digital-7', sans-serif;
  font-size: 2em;
  color: #fff;
  font-size: 100px;
  @media (min-width: 600px) {
    font-size: 140px; // Adjusted to a fixed pixel value for larger screens
  }
`;

export const RedirectButton = styled.button`
  margin: 2em 0;
  padding: 0.5em 1em;
  min-width: 260px;
  min-height: 100px;
  width: 30%;
  height: 50%;
  background: linear-gradient(170deg, #81010169, #992f2f59, #594f4f12);
  color: #ffeeee;
  -webkit-background-clip: initial;
  background-clip: initial;
  border-radius: 20px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
`;


export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  img {
    width: auto;
    max-width: 100%;
    height: auto;
    margin-bottom: 0;
  }
`;
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width:600px){
    bottom:5vh;
  }
`;

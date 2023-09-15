import styled, { keyframes } from 'styled-components';

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

// export const ContentBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background-color: #030404; // Updated the background-color
//   border-radius: 10px;
//   max-width: 600px;
//   width: 100%;
//   margin: 0 auto;
//   box-sizing: border-box;
//   color: #fff;
//   z-index:1;
// `;

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

const shine = keyframes`
  0% {
    background-position: 200% 0%;
  }
  50% {
    background-position: -200% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
`;

export const RedirectButton = styled.button`
  margin: 2em 0;
  padding: 0.5em 2em;
  min-width: 230px;
  min-height: 100px;
  width: 30%;
  height: 50%;
  background: linear-gradient(170deg, #81010169, #992f2f, #520a0a);
  color: #ffeeee;
  -webkit-background-clip: initial;
  background-clip: initial;
  border-radius: 20px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
`;

// export const RedirectButton = styled.button`
//   padding: 0.5em 2em;
//   z-index: 1;
//   min-height: 150px;
//   font-size: 2em;
//   font-weight: bold;
//   cursor: pointer;
//   background: linear-gradient(90deg, #DC143C 25%, #FF0000 50%, #DC143C 75%);
//   background-size: 220% 220%;
//   color: #ffffff;
//   border: none;
//   border-radius: 25px;
//   text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3); /* Comically 3D effect */
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
//   transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
//   width: auto;
//   max-width: 430px;
//   margin: 0 auto;
//   letter-spacing: normal;
//   animation: ${shine} 9s linear infinite;
//   text-transform: none;
//   white-space: pre-line;
//   text-align: center;
//   line-height: 1.2;
//   opacity: 0.8;
//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.4);
//   }

//   &:active {
//     border-radius: 25px; /* Maintains border-radius on active state */
//   }

//   @media (max-width: 600px) {
//     max-width: 100%;
//     font-size: 1.5em;
//     padding: 0.4em 1.5em;
//   }
// `;


export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  /* position: absolute; */
  /* top: 7vh; */
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
  /* position: absolute; */
  /* bottom: 8vh; */
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width:600px){
    bottom:5vh;
  }
`;

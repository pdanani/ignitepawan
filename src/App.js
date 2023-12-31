import React, { useState, useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Title, CountdownText, LogoContainer, CountdownContainer, RedirectButton, TopContainer, BottomContainer, BigTitle } from './styles/StyledComponents.js';
import igniteLogo from './images/Ignite_Color_Final_Web.jpg';
import pcrLogo from './images/MicrosoftTeams-image.png';
import useCountdown from './hooks/useCountdown';
import { Fireworks } from '@fireworks-js/react';

const App = () => {
  const [data, setData] = useState(null);
  const [targetDate, setTargetDate] = useState(null);
  const [serverDate, setServerDate] = useState(null);
  const ref = useRef(null);


  const { countdown, hasCountdownFinished } = useCountdown(targetDate, serverDate);

  useEffect(() => {
    const isLocal = window.location.host.includes('localhost');
    const token = isLocal ? 'Jnr97aqtPcoa5ezPjpM2' : 'll8epx5VMEeG7mXd5yvx'
    const port = isLocal ? ':8082' : '';

    fetch(`https://apps.pcrichard.com${port}/management_sales_conference/api/ignite2023.php`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const currTime = new Date(data.current_date_time);
        const launchTime = new Date(data.countdown_to_date_time);
        setTargetDate(launchTime);
        setServerDate(currTime);

        if (data.active === 'Y' && data.redirect_url) {
          window.location.href = data.redirect_url;
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);



  if (!targetDate || !serverDate) return (
    <Container>
      <Skeleton width={200} height={30} />
    </Container>
  );

  return (
    <Container>
      <Fireworks
        ref={ref}
        options={{
          opacity: 0.1, delay: { min: 100, max: 100 }, brightness: { min: 24, max: 30 }, decay: { min: 0.0097, max: 0.0429 }, traceSpeed: 2, acceleration: 1
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: 0,
        }}
      />

      <TopContainer>
        <img src={pcrLogo} alt="PCRLOGO" style={{ marginBottom: '0' }} />
        <Title>2023 Leadership Conference</Title>
      </TopContainer>
      <LogoContainer >
        <img className="twinkle" src={igniteLogo} alt="igniteLogo" />
      </LogoContainer>

      <BottomContainer>
        <BigTitle>Something BIG is Coming...</BigTitle>

        {!hasCountdownFinished && (
          <CountdownContainer>
            <CountdownText>{countdown}</CountdownText>
          </CountdownContainer>
        )}
        {hasCountdownFinished && data && data.active !== 'Y' && (
          <RedirectButton onClick={() => window.location.reload()}>
            Please wait for the announcement, then click here to refresh
          </RedirectButton>
        )}
      </BottomContainer>


    </Container >
  );
};

export default App;

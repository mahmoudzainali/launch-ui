'use client'; 

import React from 'react';
import styled, { keyframes } from 'styled-components';

const InfiniteScrollBanner = () => {
  const text = "Alrais AI image generation • ";
  const repeatedText = text.repeat(10); 

  return (
    <BannerContainer>
      <ScrollingText>
        {repeatedText}
      </ScrollingText>
    </BannerContainer>
  );
};

// Animation keyframes
const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

// Styled components
const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  padding: 1rem 0;
  margin: 2rem 0;
  
  /* Edge fading effect */
  mask-image: linear-gradient(
    90deg,
    
  );
`;

const ScrollingText = styled.div`
  display: inline-block;
  animation: ${scroll} 20s linear infinite;
  font-size: 5.0rem;
  font-family: 'Orbitron', sans-serif;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1.5px #fff; /* DeepSkyBlue */
  text-stroke: 1.5px #fff;
  padding-right: 40px;
  will-change: transform;
  user-select: none;

  &:hover {
    animation-play-state: paused;
    cursor: default;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-right: 20px;
    animation-duration: 18s;
  }
`;



export default InfiniteScrollBanner;
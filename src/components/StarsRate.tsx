import React from 'react';
import styled from 'styled-components';
import StarSVG from '../assets/svg/StarSVG';

const StarsContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  border: 1px solid yellow;

  svg:not(:last-child) {
    margin-right: 0.5em;
  }
`;

const RateContainer = styled.div<{ rating: string }>`
  display: flex;
  z-index: 3;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: ${({ rating }) => rating};

  svg path {
    fill: #fbbc05;
  }
`;

interface StarsRateProps {
  stars: number;
}

export default function StarsRate({ stars }: StarsRateProps) {
  const rating =
    (((Math.round((stars * 10) / 5) * 5) / 10) * 20).toString() + '%';

  return (
    <StarsContainer>
      <StarSVG />
      <StarSVG />
      <StarSVG />
      <StarSVG />
      <StarSVG />

      <RateContainer rating={rating}>
        <StarSVG />
        <StarSVG />
        <StarSVG />
        <StarSVG />
        <StarSVG />
      </RateContainer>
    </StarsContainer>
  );
}
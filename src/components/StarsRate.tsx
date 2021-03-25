import React from "react";
import styled from "styled-components";
import StarSVG from "../assets/svg/StarSVG";

const StarsContainer = styled.div`

  position: relative;
  display: flex;
  overflow: hidden;
  margin-top: 25px;
  svg {
    width: 1.5em;
    flex-shrink: 0;
    fill: white;
  }

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
    fill: #D00000;
  }
`;

interface StarsRateProps {
  stars: number;
}

export default function StarsRate({ stars }: StarsRateProps) {
  const rating =
    (((Math.round((stars * 10) / 5) * 5) / 10) * 20).toString() + "%";

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
import React, { ReactNode } from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <LayoutContainer className={className}>
      <Main>{children}</Main>
    </LayoutContainer>
  )};
import { styled } from "styled-components";
import breakpoints from "../../styles/breakpoints.js";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: calc(0.5 * 1.5rem);
  padding-left: calc(0.5 * 1.5rem);
  @media screen and ${breakpoints.sm} {
    max-width: 540px;
  }

  @media screen and ${breakpoints.md} {
    max-width: 720px;
  }

  @media screen and ${breakpoints.lg} {
    max-width: 960px;
  }

  @media screen and ${breakpoints.xl} {
    max-width: 1140px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-0.5 * 1.5rem);
  margin-left: calc(-0.5 * 1.5rem);
`;

const Col = styled.div`
  flex: 1 0 0%;
  flex-basis: 100%;
  padding-right: calc(0.5 * 1.5rem);
  padding-left: calc(0.5 * 1.5rem);
  box-sizing: border-box;

  @media screen and ${breakpoints.sm} {
    flex-basis: 50%;
  }

  @media screen and ${breakpoints.md} {
    flex-basis: 25%;
  }
`;

export { Container, Row, Col };

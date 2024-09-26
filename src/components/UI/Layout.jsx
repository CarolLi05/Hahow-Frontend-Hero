import { styled } from "styled-components";
import breakpoint from "../../utils/breakpoint.js";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: calc(0.5 * 1.5rem);
  padding-left: calc(0.5 * 1.5rem);
`;

const Content = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const Row = styled.div`
  margin-top: 5rem;
  margin-right: calc(-0.5 * 1.5rem);
  margin-left: calc(-0.5 * 1.5rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.$justifyContent || "left"};
  align-items: ${(props) => props.$alignItem || "start"};
`;

const Col = styled.div`
  flex: 1 0 0%
  flex-basis: 100%;
  padding-right: calc(0.5 * 1.5rem);
  padding-left: calc(0.5 * 1.5rem);
  box-sizing: border-box;

  @media screen and ${breakpoint.sm} {
    flex-basis: 50%;
  }

  @media screen and ${breakpoint.md} {
    flex-basis: 25%;
  }
`;

export { Container, Content, Row, Col };

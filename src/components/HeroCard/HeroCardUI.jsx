import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import breakpoint from "../../styles/breakpoint.js";

const ImgWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 210px;
`;

const Img = styled.img`
  display: block;
  margin: 0;
  padding: 0;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 4px;
  }
`;

const Thumbnail = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding: 0;
  overflow: hidden;

  & div img {
    transform: scaleX(1);
    transition: all 0.2s linear;
    overflow: hidden;
    object-position: top center;
  }
`;

const Body = styled.div`
  position: relative;
  padding: 16px 10px 17px;
  margin-bottom: 12px;
  overflow: hidden;
  line-height: 1;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.3s;
  border: none;
  vertical-align: middle;
  z-index: 30;
  height: 100px;

  &:before {
    background: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
    bottom: 100%;
    content: "";
    width: 100%;
    height: 100%;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition: transform 0.3s;
    z-index: -1;
  }

  &:after {
    border-color: transparent #fff transparent transparent;
    border-style: solid;
    border-width: 12px 12px 0 0;
    position: absolute;
    top: auto;
    right: 0;
    bottom: 0;
    content: "";
    z-index: 40;
  }

  @media screen and ${breakpoint.sm} {
    padding: 16px 24px 17px 20px;
  }
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;

const Card = styled(NavLink)`
  margin: 6px 0 4px;
  color: #fff;
  transition: color 0.3s;
  position: relative;

  &:hover,
  &.active {
    ${Thumbnail} div img {
      transform: scale3d(1.05, 1.05, 1);
    }

    ${Body}:before {
      transform: translate3d(0, 100%, 0);
    }
  }
`;

export { Card, Thumbnail, ImgWrapper, Img, Body, Title };

import { styled } from "styled-components";
import breakpoint from "../utils/breakpoint";
import ImgSrc from "../assets/happyDoggie.png";

const ImgWrapper = styled.div`
  height: 210px;
  position: relative;
  margin: 0;
  padding: 0;
`;

const Img = styled.img.attrs({
  src: `${ImgSrc}`,
  alt: "Hero Image",
})`
  display: block;
  margin: 0;
  object-fit: cover;
  object-position: center center;
  padding: 0;
  width: 100%;
  height: 100%;

  &:after {
    height: 4px;
    content: "";
    background-color: #e62429;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

const CardThumbnail = styled.div`
  background: #e62429;
  margin: 0;
  overflow: hidden;
  padding: 0;

  & div img {
    transform: scaleX(1);
    transition: all 0.2s linear;
    overflow: hidden;
    object-position: top center;
  }
`;

const CardBody = styled.div`
  padding: 16px 10px 17px;
  overflow: hidden;
  position: relative;
  line-height: 1;
  background: #151515;
  color: #e62429;
  transition: color 0.3s;
  border: none;
  height: 100px;
  vertical-align: middle;
  z-index: 30;

  &:before {
    background: #e62429;
    bottom: 100%;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition: transform 0.3s;
    width: 100%;
    z-index: -1;
  }

  &:after {
    border-color: transparent #fff transparent transparent;
    border-style: solid;
    border-width: 12px 12px 0 0;
    bottom: 0;
    content: "";
    position: absolute;
    right: 0;
    top: auto;
    z-index: 40;
  }

  @media screen and ${breakpoint.sm} {
    padding: 16px 24px 17px 20px;
  }
`;

const CardTitle = styled.p`
  color: #fff;
  font-weight: 700;
  margin: 0;
`;

const Card = styled.div`
  margin: 6px 0 4px;
  color: #fff;
  transition: color 0.3s;
  box-sizing: border-box;
  position: relative;

  &:hover {
    ${CardThumbnail} div img {
      transform: scale3d(1.05, 1.05, 1);
    }

    ${CardBody}:before {
      transform: translate3d(0, 100%, 0);
    }
  }
`;

export default function HeroCard() {
  return (
    <Card>
      <CardThumbnail>
        <ImgWrapper>
          <Img />
        </ImgWrapper>
      </CardThumbnail>
      <CardBody>
        <CardTitle>Card Title</CardTitle>
      </CardBody>
    </Card>
  );
}

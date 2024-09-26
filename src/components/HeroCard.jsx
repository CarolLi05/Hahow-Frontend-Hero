import { styled } from "styled-components";
import breakpoint from "../styles/breakpoint";
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

const CardThumbnail = styled.div`
  background: ${({ theme }) => theme.colors.primary};
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
  position: relative;
  padding: 16px 10px 17px;
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

const CardTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;

const Card = styled.div`
  margin: 6px 0 4px;
  color: #fff;
  transition: color 0.3s;
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

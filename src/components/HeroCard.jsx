import { styled } from "styled-components";
import ImgSrc from "../assets/happyDoggie.png";

const ImgWrapper = styled.div`
  box-shadow: 0 7px 17px -8px rgba(0, 0, 0, 0.8);
  transform: translate3d(0) scale(1);
  transition: all 0.17s ease-in-out;
  transform: translateZ(0);
`;

const Img = styled.img.attrs({
  src: `${ImgSrc}`,
  alt: 'Hero Image'
})`
  display: block;
  margin: 0;
  object-fit: cover;
  object-position: center center;
  padding: 0;
  width: 100%;
  height: 20vh;
`;

const CardBody = styled.div`
  padding: 0.75rem 0;
`;

const CardTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

const Card = styled.div`
  padding-bottom: 0.5rem;

  &:hover {
    ${CardTitle} {
      color: #e62429;
    }
    ${ImgWrapper} {
      transform: translate3d(0, -2%, 0);
    }
  }
`;

export default function HeroCard() {
  return (
    <Card>
      <ImgWrapper>
        <Img />
      </ImgWrapper>
      <CardBody>
        <CardTitle>Card Title</CardTitle>
      </CardBody>
    </Card>
  );
}

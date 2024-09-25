import { styled } from "styled-components";
import ImgSrc from "../assets/happyDoggie.png";

const CardTitle = styled.h3`
  font-size: 1.75rem;
  text-align: center;
`;

const ImgWrapper = styled.div`
  box-shadow: 0 7px 17px -8px rgba(0, 0, 0, 0.8);
  transform: translate3d(0) scale(1);
  transition: all 0.17s ease-in-out;
  transform: translateZ(0);
`;

// const Img = styled.image.attrs({
//   src: `${ImgSrc}`,
// })`
//   display: block;
//   margin: 0;
//   object-fit: cover;
//   object-position: center center;
//   padding: 0;
//   width: 100%;
//   height: 20vh;
// `;

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
        {/* <Img /> */}
        <img src={ImgSrc} style={
          {
            display: 'block',
            margin: 0,
            'object-fit': 'cover',
            'object-position': 'center center',
            padding: 0,
            width: '100%',
            height: '20vh',
          }
        } alt="" />
      </ImgWrapper>
      <CardTitle>123</CardTitle>
    </Card>
  );
}

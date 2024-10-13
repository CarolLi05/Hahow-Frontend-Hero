import { Card, Thumbnail, ImgWrapper, Img, Body, Title } from "./HeroCardUI";

export default function HeroCard({id, name, image}) {
  return (
    <Card to={`${id}`}>
      <Thumbnail>
        <ImgWrapper>
          <Img src={image} alt={name} />
        </ImgWrapper>
      </Thumbnail>
      <Body>
        <Title>
          {name}
        </Title>
      </Body>
    </Card>
  );
}

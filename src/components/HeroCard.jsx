import { Card, Thumbnail, ImgWrapper, Img, Body, Title } from "./UI/Card";

export default function HeroCard({id, name, image, selected}) {
  return (
    <Card className={`${selected ? "active" : ""}`} to={`/heroes/${id}`}>
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

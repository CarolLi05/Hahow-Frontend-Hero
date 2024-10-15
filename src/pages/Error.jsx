import { useRouteError } from "react-router-dom";
import { styled } from "styled-components";
import { Container } from "../components/UI/Layout";

const PageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  height: 100vh;

  & div h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  & div p {
    font-size: 1.5rem;
  }
`;

export default function ErrorPage() {
  const error = useRouteError();

  let message = "";

  if (error.status === 500) {
    message = "無法取得 Heroes 的資料";
  }

  if (error.status === 404) {
    message = "無法找到頁面";
  }

  return (
    <Container>
      <PageContent>
        <div>
          <h1>發生了一點錯誤...</h1>
          <p>{message}</p>
        </div>
      </PageContent>
    </Container>
  )
}

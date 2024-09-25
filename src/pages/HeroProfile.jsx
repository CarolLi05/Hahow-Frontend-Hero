import { styled } from "styled-components";
import Border from "../components/Border";

const ProfileWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
`;

const ProfileContent = styled.div`
  padding: 0 3rem;
`;

const Ability = styled.div`
`;

export default function HeroProfile() {
  return (
    <ProfileWrapper>
      <Border position="top" />
      <ProfileContent>
        <Ability>HeroProfile</Ability>
      </ProfileContent>
      <Border position="bottom" />
    </ProfileWrapper>
  );
}

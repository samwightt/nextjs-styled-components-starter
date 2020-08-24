import styled from "styled-components";

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  max-width: 40rem;
  box-sizing: border-box;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagePlaceholder = styled.div`
  background-color: grey;
  width: 192px;
  height: 192px;
  border-radius: 100%;
`;

const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

const ProfileInfo = styled.div`
  margin-top: 1.5rem;
  max-width: 26rem;
`;

const Tagline = styled.p`
  text-align: center;
  font-size: 1rem;
`;

const SocialIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: 0.1rem solid grey;
  border-radius: 100%;
  transition: all;
  transition-duration: 100ms;

  &:hover {
    border: 0.1px solid black;
    background-color: black;
  }
`;

const SocialIconsHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.5rem;

  & > * {
    margin-left: 1rem;
  }

  & > *:first-child {
    margin-left: 0;
  }
`;

export default function Home() {
  return (
    <CenteredDiv>
      <Container>
        <ImagePlaceholder />
        <ProfileInfo>
          <Heading>Profile Name</Heading>
          <Tagline>
            This is some content about the profile and the person that owns it.
            This is just an example to show how creating content in this works.
          </Tagline>
        </ProfileInfo>
        <SocialIconsHolder>
          <SocialIcon />
          <SocialIcon />
          <SocialIcon />
          <SocialIcon />
        </SocialIconsHolder>
      </Container>
    </CenteredDiv>
  );
}

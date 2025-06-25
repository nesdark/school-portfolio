import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: min(80%, 60rem);
  margin: 3rem auto 0;

  .profile-photo {
    width: fit-content;

    background: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

    padding: 0.5rem;
    border-radius: 100%;

    img {
      width: 20rem;
      height: 20rem;

      /* object-fit: cover; */
      /* object-position: -60px; */

      border-radius: 100%;
    }
  }

  h3.code-font {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.4rem;
    text-align: center;
  }
`;

export const MySkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const Skills = styled.ul`
  width: 40rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  > * {
    flex: 1;
  }

  li:not(.and-more) {
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

    font-size: 1.6rem;
    font-family: "JetBrains Mono";
    font-weight: 600;

    border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;

    text-align: center;
  }

  .and-more {
    font-size: 1.6rem;
    font-family: "JetBrains Mono";
    font-weight: 600;
    text-align: center;
  }
`;

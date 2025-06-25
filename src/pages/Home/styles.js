import styled from "styled-components";
import theme from "../styles/theme";
import { breakpoints } from "../styles/breakpoints";

export const Container = styled.main`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(2rem, -5.526rem + 10.782vw, 10rem);

  .forgot-password {
    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_700};

    margin-bottom: 2rem;

    &:hover {
      opacity: 0.8;
    }
  }

  img {
    width: 20rem;
    height: 20rem;

    clip-path: circle();
  }
`;

export const FormScreen = styled.form`
  width: clamp(31.6rem, 15.81vw + 24.833rem, 47.6rem);

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  padding: 2.4rem;

  border-radius: 1.6rem;
  background: ${({ theme }) => theme.COLORS.DARK_700};

  h2 {
    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;

    text-align: center;
  }

  button:last-child {
    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};

    font-size: 1.4rem;
    line-height: 2.4rem;

    margin-inline: auto;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${breakpoints.LG}) {
    label input {
      background: transparent !important;

      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT};
    }
  }
`;

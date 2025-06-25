import styled from "styled-components";

export const Container = styled.ul`
  display: grid;

  grid-template-columns: 1fr 1fr;

  grid-gap: 2rem;
`;

export const Card = styled.div`
  height: 100%;

  a {
    display: flex;
    flex-direction: column;

    width: 40rem;
    height: 100%;

    border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    border-radius: 0.5rem;

    padding: 1rem;
  }

  img {
    width: 100%;
    height: 25rem;

    object-fit: contain;
  }

  h3 {
    font-size: 1.6rem;

    color: #2d3748;

    margin-block: 1.4rem 1rem;
  }

  p {
    font-size: 1.4rem;
    color: #2d3748;
  }
`;

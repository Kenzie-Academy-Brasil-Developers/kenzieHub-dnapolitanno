import styled from "styled-components";

export const MainPageError = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  width: 100vw;
  height: 100vh;

  h1 {
    font-weight: 700;
    font-size: 10rem;

    color: var(--color-primary);
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    padding: 0px 16px;

    width: 80%;
    height: 2.375rem;

    font-weight: 500;
    font-size: var(--font-size-4);

    color: var(--color-grey-0);

    background: var(--color-primary);

    border: 1.2182px solid var(--color-primary);
    border-radius: 4px;
  }

  a:hover {
    background: var(--color-primary-focus);

    border: 1.2182px solid var(--color-primary-focus);
  }

  @media (min-width: 420px) {
    a {
      width: 50%;
      height: 3rem;
    }
  }
`;
